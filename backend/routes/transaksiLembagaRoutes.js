import express from 'express';
import {
  getTransaksiLembagas,
  createTransaksiLembaga,
  getTransaksiLembagaById,
  updateTransaksiLembaga,
  deleteTransaksiLembaga
} from '../controllers/transaksiLembagaController.js';

const router = express.Router();

router.get('/', getTransaksiLembagas);
router.post('/', createTransaksiLembaga);
router.get('/:id', getTransaksiLembagaById);
router.put('/:id', updateTransaksiLembaga);
router.delete('/:id', deleteTransaksiLembaga);

export default router;