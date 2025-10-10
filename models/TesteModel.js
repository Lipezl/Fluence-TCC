import db from '../config/db.js';

function salvarTeste(teste, callback){
    const {userId, textoId, resultado, feedback, transcricao} = teste;
    const query = `
    INSERT INTO testes (usuario_id, textos_leitura_id, data, resultado, feedback, transcricao)
    VALUES (?, ?, NOW(), ?, ?, ?)
    `;
    db.query(query, [userId, textoId, resultado, feedback, transcricao], (err, result)=>{
        if (err) {
            console.error('Erro ao salvar teste:', err);
            return callback(err);
        }
        callback(null, { id: result.insertId, ...teste });
    });
}
function listarTestesPorUsuario(usuarioId, callback) {
  const query = `
    SELECT 
      t.id,
      t.data,
      tl.conteudo AS conteudo
    FROM testes t
    LEFT JOIN textos_leitura tl ON t.textos_leitura_id = tl.id
    WHERE t.usuario_id = ?
    ORDER BY t.data DESC
  `;
  db.query(query, [usuarioId], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}


//Arrumar função (IMPORTANTE)
function buscarDetalhesTeste(testeId, callback) {
  const query = `
    SELECT 
      t.data_realizacao,
      t.resultado,
      t.feedback,
      t.transcricao,
      tl.nivel,
      tl.conteudo,
      tl.erros,
      t2.titulo
    FROM testes t
    LEFT JOIN textos_leitura tl ON t.textos_leitura_id = tl.id
    LEFT JOIN textos t2 ON tl.id_texto = t2.id
    WHERE t.id = ?
  `;
  db.query(query, [testeId], (err, results) => {
    if (err) return callback(err);
    if (results.length === 0) return callback(null, null); // teste não encontrado
    callback(null, results[0]);
  });
}
export function sortearTextoParaUsuario(userId, callback) {
    db.query('SELECT nivel FROM usuarios WHERE id = ?', [userId], (err, results) => {
        if (err) return callback(err);
        if (!results.length) return callback(new Error('Usuário não encontrado'));

        const nivelUsuario = results[0].nivel;

        const queryFeitos = `
            SELECT textos_leitura_id FROM testes WHERE usuario_id = ?
        `;
        db.query(queryFeitos, [userId], (err, feitos) => {
            if (err) return callback(err);

            const feitosIds = feitos.map(f => f.textos_leitura_id);

            let queryDisponiveis = 'SELECT * FROM textos_leitura WHERE nivel <= ?';
            let params = [nivelUsuario];

            if (feitosIds.length > 0) {
                queryDisponiveis += ` AND id NOT IN (${feitosIds.join(',')})`;
            }

            db.query(queryDisponiveis, params, (err, textosDisponiveis) => {
                if (err) return callback(err);

                if (textosDisponiveis.length === 0) {
                    return callback(null, null);
                }

                const textoSorteado = textosDisponiveis[Math.floor(Math.random() * textosDisponiveis.length)];
                callback(null, textoSorteado);
            });
        });
    });
}

export default {
    salvarTeste,
    listarTestesPorUsuario,
    buscarDetalhesTeste,
    sortearTextoParaUsuario
};