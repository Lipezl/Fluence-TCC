import express from 'express';
import { cadastrar, login } from '../controllers/authController.js';
import { users } from '../data/users.js';

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
  res.status(200).json({
    status: 'ok',
    message: 'Lista completa de usuários cadastrados',
    data: users
  });
});

export default router;