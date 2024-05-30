import express from 'express';
import {
  getTransaksiDonasis,
  createTransaksiDonasi,
  getTransaksiDonasiById,
  updateTransaksiDonasi,
  deleteTransaksiDonasi
} from '../controllers/transaksiDonasiController.js';

const router = express.Router();

router.get('/', getTransaksiDonasis);
router.post('/', createTransaksiDonasi);
router.get('/:id', getTransaksiDonasiById);
router.put('/:id', updateTransaksiDonasi);
router.delete('/:id', deleteTransaksiDonasi);

export default router;