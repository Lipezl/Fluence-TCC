import db from '../config/db.js';

function findById(id, callback) {
  db.query('SELECT * FROM textos_leitura WHERE id = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
}

function createTexto(texto, callback) {
  const { titulo, conteudo } = texto;
  const query = `
    INSERT INTO textos_leitura (titulo, conteudo, criado_em)
    VALUES (?, ?, NOW())
  `;
  db.query(query, [titulo, conteudo], (err, result) => {
    if (err) return callback(err);
    callback(null, { id: result.insertId, ...texto });
  });
}

function findAll(callback) {
    db.query('SELECT * FROM textos_leitura', callback);
}

function updateTexto(id, texto, callback) {
  const { titulo, conteudo } = texto;
  const query = `
    UPDATE textos_leitura
    SET titulo = ?, conteudo = ?
    WHERE id = ?
  `;
  db.query(query, [titulo, conteudo, id], (err, result) => {
    if (err) return callback(err);
    callback(null, { id, ...texto });
  });
}

function deleteTexto(id, callback){
    db.query('DELETE FROM textos_leitura WHERE id = ?', [id], (err, result) => {
        if (err) return callback(err);
        callback(null, { message: 'Texto deletado com sucesso!' });
    });
}

export default {
    findById,
    createTexto,
    findAll,
    updateTexto,
    deleteTexto
};