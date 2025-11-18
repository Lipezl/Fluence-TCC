import db from '../config/db.js';
import bcrypt from 'bcrypt';

function findByEmail(email, callback) {
  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
}

function createUser(user, callback) {
  const { nome, senha, email, escolaridade, dataNascimento, nivel } = user;

  bcrypt.hash(senha, 10).then(senhaHash => {
    const query = `
      INSERT INTO usuarios (nome, senha, email, escolaridade, data_nascimento, criado_em, nivel)
      VALUES (?, ?, ?, ?, ?, NOW(), ?)
    `;

    db.query(query, [nome, senhaHash, email, escolaridade, dataNascimento, nivel], (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, ...user, senha: undefined });
    });
  }).catch(err => callback(err));
}

function deleteUser(id, callback){
  db.query('DELETE FROM testes WHERE usuario_id = ?', [id], (err) => {
    if (err) return callback(err);
    // Após deletar os testes, deletar o usuário
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err2, result) => {
      if (err2) return callback(err2);
      callback(null, result);
    });
  });
}

function findAll(callback) {
  db.query('SELECT * FROM usuarios', callback);
}

function findById(id, callback) {
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
}


export default {
  findByEmail,
  createUser,
  deleteUser,
  findAll,
  findById
};
