import db from '../config/db.js';

function findByEmail(email, callback) {
  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
}

function createUser(user, callback) {
  const { nome, senha, email, escolaridade, dataNascimento } = user;
  const query = `
    INSERT INTO usuarios (nome, senha, email, escolaridade, data_nascimento, criado_em)
    VALUES (?, ?, ?, ?, ?, NOW())
  `;
  db.query(query, [nome, senha, email, escolaridade, dataNascimento], (err, result) => {
    if (err) return callback(err);
    callback(null, { id: result.insertId, ...user });
  });
}

function findAll(callback) {
  db.query('SELECT * FROM usuarios', callback);
}

export default {
  findByEmail,
  createUser,
  findAll,
};
