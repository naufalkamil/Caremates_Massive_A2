import express from 'express';
import {
  getLembagas,
  createLembaga,
  getLembagaById,
  updateLembaga,
  deleteLembaga
} from '../controllers/lembagaController.js';

const router = express.Router();

router.get('/', getLembagas);
router.post('/', createLembaga);
router.get('/:id', getLembagaById);
router.put('/:id', updateLembaga);
router.delete('/:id', deleteLembaga);

export default router;