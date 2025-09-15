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
      tl.id, 
      t.titulo, 
      tl.data_realizacao
    FROM testes_leitura tl
    JOIN textos t ON tl.id_texto = t.id
    WHERE tl.id_usuario = ?
    ORDER BY tl.data_realizacao DESC
  `;
  db.query(query, [usuarioId], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

function buscarDetalhesTeste(testeId, callback) {
  const query = `
    SELECT 
      tl.data_realizacao,
      tl.tempo_leitura,
      tl.erros,
      tl.feedback,
      t.titulo
    FROM testes_leitura tl
    JOIN textos t ON tl.id_texto = t.id
    WHERE tl.id = ?
  `;
  db.query(query, [testeId], (err, results) => {
    if (err) return callback(err);
    if (results.length === 0) return callback(null, null); // teste não encontrado
    callback(null, results[0]);
  });
}

export function sortearTextoParaUsuario(userId, callback) {
    // Busca os textos que o usuário já realizou
    const queryFeitos = `
        SELECT textos_leitura_id FROM testes WHERE usuario_id = ?
    `;
    db.query(queryFeitos, [userId], (err, feitos) => {
        if (err) return callback(err);

        const feitosIds = feitos.map(f => f.textos_leitura_id);

        let queryDisponiveis = 'SELECT * FROM textos_leitura';
        if (feitosIds.length > 0) {
            queryDisponiveis += ` WHERE id NOT IN (${feitosIds.join(',')})`;
        }

        db.query(queryDisponiveis, (err, textosDisponiveis) => {
            if (err) return callback(err);

            if (textosDisponiveis.length === 0) {
                return callback(null, null);
            }

            const textoSorteado = textosDisponiveis[Math.floor(Math.random() * textosDisponiveis.length)];
            callback(null, textoSorteado);
        });
    });
}

export default {
    salvarTeste,
    listarTestesPorUsuario,
    buscarDetalhesTeste,
    sortearTextoParaUsuario
};