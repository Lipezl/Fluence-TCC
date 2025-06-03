import { users } from '../data/users.js';

export function cadastrar(req, res) {
    const { nome, senha, email, escolaridade, dataNascimento } = req.body;
    if (!nome || !senha || !email || !escolaridade || !dataNascimento) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    };
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'Email já cadastrado.' });
    };
    const newUser = {
        id: users.length + 1,
        nome,
        senha,
        email,
        escolaridade,
        dataNascimento
    };
    users.push(newUser);
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
}

export function login(req, res) {
  const { email, senha } = req.body;

  const user = users.find(u => u.email === email && u.senha === senha);

  if (!user) {
    return res.render('login', {
      loginValido: false
    });
  }

  return res.redirect('/');
}