import express from 'express';
import {
  iniciarTeste,
  realizarTeste,
  historicoUsuario,
  detalhesTeste,
  transcreverAudio // importe a função do controller
} from '../controllers/testeController.js';

const router = express.Router();

router.get('/iniciarTeste', iniciarTeste);
router.post('/realizarTeste', realizarTeste);
router.get('/historico', historicoUsuario);
router.get('/detalhes/:testeId', detalhesTeste);

// Nova rota para transcrição de áudio
router.post('/transcreverAudio', transcreverAudio);

export default router;
