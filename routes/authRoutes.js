import express from 'express';
import { cadastrar, login, listarUsuarios, perfil, deleteUser, logout } from '../controllers/authController.js';

const router = express.Router();

router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});
router.post('/cadastro', cadastrar);

router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/login', login);

router.delete('/perfil/delete', deleteUser)

// Corrigido: agora retorna JSON usando o controller
router.get('/users', listarUsuarios);

router.get ('/perfil', perfil);

router.post('/logout', logout);
export default router;