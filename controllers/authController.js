import { users } from '../data/users.js';

export function cadastrar(req, res) {
    const { nome, senha, email, nivelEscolaridade, dataNascimento } = req.body;
    if (!nome || !senha || !email || !nivelEscolaridade || !dataNascimento) {
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
        nivelEscolaridade,
        dataNascimento
    };
    users.push(newUser);
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
}

export function login(req, res) {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Credenciais inválidas.' });

  return res.json({ message: 'Login bem-sucedido!' });
}