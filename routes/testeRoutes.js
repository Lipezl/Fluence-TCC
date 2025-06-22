import express from 'express';
import { sortearTexto, realizarTeste, historicoUsuario } from '../controllers/testeController.js';

const router = express.Router();

router.get('/sortearTexto/:userId', sortearTexto);
router.post('/realizarTeste', realizarTeste);
router.get('/historico/:userId', historicoUsuario);

export default router;