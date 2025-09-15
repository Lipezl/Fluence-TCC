import User from '../models/UserModel.js';
import bcrypt from 'bcrypt';

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
      return res.redirect('/login');
    });
  });
};

export function login(req, res) {
  const { email, senha } = req.body;

  User.findByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).render('login', { loginValido: false });
    }

    if (!user) {
      return res.render('login', { loginValido: false });
    }

    bcrypt.compare(senha, user.senha, (err, isMatch) => {
      if (err || !isMatch) {
        return res.render('login', { loginValido: false });
      }

      // Salva o id do usuário na sessão
      req.session.userId = user.id;

      // Redireciona para a tela de home
      return res.redirect('/');
    });
  });
}

export function deleteUser(req, res) {
  const userId = req.session.userId;
  if (!userId) {
    return res.status(401).json({ message: 'Usuário não autenticado.' });
  }
  User.deleteUser(userId, (err, result) => {
    if (err) return res.status(500).json({ message: 'Erro ao deletar usuário.' });
    req.session.destroy(() => {
      res.redirect('/login');
    });
  });
}

export function listarUsuarios(req, res) {
  User.findAll((err, usuarios) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar usuários.' });
    if (!usuarios || usuarios.length === 0) {
      return res.status(404).json({ message: 'Nenhum usuário encontrado.' });
    }
    return res.status(200).json({ status: 'ok', message: 'Lista de usuários', usuarios });
  });
}

export function perfil(req, res) {
  const userId = req.session.userId;
  User.findById(userId, (err, usuario) => {
    if (err || !usuario) return res.redirect('/login');

    if (usuario.data_nascimento) {
      const d = new Date(usuario.data_nascimento);
      usuario.data_nascimento = d.toLocaleDateString('pt-BR');
    }

    res.render('perfil', { usuario });
  });
}