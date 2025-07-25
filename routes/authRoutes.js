import express from 'express';
import { cadastrar, login } from '../controllers/authController.js';

const router = express.Router();

router.get('/cadastro', (req, res)=>{
  res.render('cadastro');
});
router.post('/cadastro', cadastrar);

router.get('/login', (req, res)=>{
  res.render('login');
});

router.post('/login', login);

router.get('/users', (req, res) => {
  User.findAll((err, users) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar usuários' });
    res.status(200).json({
      status: 'ok',
      message: 'Lista completa de usuários cadastrados',
      data: users
    });
  });
});

export default router;