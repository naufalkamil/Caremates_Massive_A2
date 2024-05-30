import express from 'express';
import {
  getDanas,
  createDana,
  getDanaById,
  updateDana,
  deleteDana
} from '../controllers/danaController.js';

const router = express.Router();

router.get('/', getDanas);
router.post('/', createDana);
router.get('/:id', getDanaById);
router.put('/:id', updateDana);
router.delete('/:id', deleteDana);

export default router;