import express from 'express';
import { iniciarTeste, realizarTeste, historicoUsuario, detalhesTeste } from '../controllers/testeController.js';

const router = express.Router();

router.get('/iniciarTeste', iniciarTeste);
router.post('/realizarTeste', realizarTeste);
router.get('/historico/:userId', historicoUsuario);
router.get('/detalhes/:testeId', detalhesTeste);

export default router;