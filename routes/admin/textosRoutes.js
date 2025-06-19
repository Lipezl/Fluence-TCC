import express from 'express';
import { listarTextos, criarTexto, editarTexto, deletarTexto } from '../../controllers/admin/textosController.js';

const router = express.Router();

router.get('/textos', listarTextos);
router.post('/textos', criarTexto);
router.put('/textos/:id', editarTexto);
router.delete('/textos/:id', deletarTexto);

export default router;