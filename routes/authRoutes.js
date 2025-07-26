import express from 'express';
import { cadastrar, login, listarUsuarios } from '../controllers/authController.js';

const router = express.Router();

router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});
router.post('/cadastro', cadastrar);

router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/login', login);

// Corrigido: agora retorna JSON usando o controller
router.get('/users', listarUsuarios);

export default router;