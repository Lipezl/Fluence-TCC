import User from '../models/UserModel.js';

export function cadastrar(req, res) {
  const { nome, senha, email, escolaridade, dataNascimento } = req.body;

  if (!nome || !senha || !email || !escolaridade || !dataNascimento) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  User.findByEmail(email, (err, existingUser) => {
    if (err) return res.status(500).json({ message: 'Erro no servidor.' });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já cadastrado.' });
    }

    User.createUser({ nome, senha, email, escolaridade, dataNascimento }, (err, newUser) => {
      if (err) return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
      return res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
    });
  });
};

export function login(req, res) {
  const { email, senha } = req.body;

  User.findByEmail(email, (err, user) => {
    if (err) return res.status(500).render('login', { loginValido: false });
    if (!user || user.senha !== senha) {
      return res.render('login', { loginValido: false });
    }

    return res.redirect('/');
  });
};

export function listarUsuarios(req, res) {
  User.findAll((err, usuarios) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar usuários.' });
    if (!usuarios || usuarios.length === 0) {
      return res.status(404).json({ message: 'Nenhum usuário encontrado.' });
    }
    return res.status(200).json({ status: 'ok', message: 'Lista de usuários', usuarios });
  });
}