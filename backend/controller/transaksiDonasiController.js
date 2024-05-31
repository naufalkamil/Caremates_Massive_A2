import TransaksiDonasi from '../models/transaksiDonasiModels.js';

export const getTransaksiDonasis = async (req, res) => {
  try {
    const transaksiDonasis = await TransaksiDonasi.findAll();
    res.json(transaksiDonasis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTransaksiDonasi = async (req, res) => {
  const { id_dana, tgl_transaksi, nominal, doa } = req.body;
  try {
    const newTransaksiDonasi = await TransaksiDonasi.create({
      id_dana,
      tgl_transaksi,
      nominal,
      doa
    });
    res.status(201).json(newTransaksiDonasi);
  } catch (error) {
    console.error('Kesalahan saat membuat transaksi donasi baru:', error);
    res.status(500).json({ msg: "Terjadi kesalahan saat membuat transaksi donasi baru" });
  }
};

export const getTransaksiDonasiById = async (req, res) => {
  const { id } = req.params;
  try {
    const transaksiDonasi = await TransaksiDonasi.findByPk(id);
    if (transaksiDonasi) {
      res.json(transaksiDonasi);
    } else {
      res.status(404).json({ error: 'Transaksi Donasi not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTransaksiDonasi = async (req, res) => {
  const { id } = req.params;
  const { id_dana, tgl_transaksi, nominal, doa } = req.body;
  try {
    const transaksiDonasi = await TransaksiDonasi.findByPk(id);
    if (transaksiDonasi) {
      transaksiDonasi.id_dana = id_dana;
      transaksiDonasi.tgl_transaksi = tgl_transaksi;
      transaksiDonasi.nominal = nominal;
      transaksiDonasi.doa = doa;
      await transaksiDonasi.save();
      res.json(transaksiDonasi);
    } else {
      res.status(404).json({ error: 'Transaksi Donasi not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTransaksiDonasi = async (req, res) => {
  const { id } = req.params;
  try {
    const transaksiDonasi = await TransaksiDonasi.findByPk(id);
    if (transaksiDonasi) {
      await transaksiDonasi.destroy();
      res.json({ message: 'Transaksi Donasi deleted' });
    } else {
      res.status(404).json({ error: 'Transaksi Donasi not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
