import express from 'express';
import { cadastrar, login } from '../controllers/authController.js';
import { users } from '../data/users.js';

const router = express.Router();

router.post('/cadastrar', cadastrar);
router.post('/login', login);

router.get('/users', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Lista completa de usuários cadastrados',
    data: users
  });
});

export default router;
