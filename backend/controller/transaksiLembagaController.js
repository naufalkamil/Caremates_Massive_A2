import TransaksiLembaga from '../models/transaksiLembagaModels.js';

export const getTransaksiLembagas = async (req, res) => {
  try {
    const transaksiLembagas = await TransaksiLembaga.findAll();
    res.json(transaksiLembagas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTransaksiLembaga = async (req, res) => {
  const { id_transaksi_donasi, nominal_penarikan, tgl_penarikan, detail_penarikan } = req.body;
  try {
    const newTransaksiLembaga = await TransaksiLembaga.create({
      id_transaksi_donasi,
      nominal_penarikan,
      tgl_penarikan,
      detail_penarikan
    });
    res.status(201).json(newTransaksiLembaga);
  } catch (error) {
    console.error('Kesalahan saat membuat transaksi lembaga baru:', error);
    res.status(500).json({ msg: "Terjadi kesalahan saat membuat transaksi lembaga baru" });
  }
};

export const getTransaksiLembagaById = async (req, res) => {
  const { id } = req.params;
  try {
    const transaksiLembaga = await TransaksiLembaga.findByPk(id);
    if (transaksiLembaga) {
      res.json(transaksiLembaga);
    } else {
      res.status(404).json({ error: 'Transaksi Lembaga not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTransaksiLembaga = async (req, res) => {
  const { id } = req.params;
  const { id_transaksi_donasi, nominal_penarikan, tgl_penarikan, detail_penarikan } = req.body;
  try {
    const transaksiLembaga = await TransaksiLembaga.findByPk(id);
    if (transaksiLembaga) {
      transaksiLembaga.id_transaksi_donasi = id_transaksi_donasi;
      transaksiLembaga.nominal_penarikan = nominal_penarikan;
      transaksiLembaga.tgl_penarikan = tgl_penarikan;
      transaksiLembaga.detail_penarikan = detail_penarikan;
      await transaksiLembaga.save();
      res.json(transaksiLembaga);
    } else {
      res.status(404).json({ error: 'Transaksi Lembaga not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTransaksiLembaga = async (req, res) => {
  const { id } = req.params;
  try {
    const transaksiLembaga = await TransaksiLembaga.findByPk(id);
    if (transaksiLembaga) {
      await transaksiLembaga.destroy();
      res.json({ message: 'Transaksi Lembaga deleted' });
    } else {
      res.status(404).json({ error: 'Transaksi Lembaga not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};