import Dana from '../models/danaModels.js';

export const getDanas = async (req, res) => {
  try {
    const danas = await Dana.findAll();
    res.json(danas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createDana = async (req, res) => {
  const { id_lembaga, tgl_pengajuan, rincian, nominal_butuh, status } = req.body;
  try {
    const newDana = await Dana.create({
      id_lembaga,
      tgl_pengajuan,
      rincian,
      nominal_butuh,
      status
    });
    res.status(201).json(newDana);
  } catch (error) {
    console.error('Kesalahan saat membuat dana baru:', error);
    res.status(500).json({ msg: "Terjadi kesalahan saat membuat dana baru" });
  }
};

export const getDanaById = async (req, res) => {
  const { id } = req.params;
  try {
    const dana = await Dana.findByPk(id);
    if (dana) {
      res.json(dana);
    } else {
      res.status(404).json({ error: 'Dana not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateDana = async (req, res) => {
  const { id } = req.params;
  const { id_lembaga, tgl_pengajuan, rincian, nominal_butuh, status } = req.body;
  try {
    const dana = await Dana.findByPk(id);
    if (dana) {
      dana.id_lembaga = id_lembaga;
      dana.tgl_pengajuan = tgl_pengajuan;
      dana.rincian = rincian;
      dana.nominal_butuh = nominal_butuh;
      dana.status = status;
      await dana.save();
      res.json(dana);
    } else {
      res.status(404).json({ error: 'Dana not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteDana = async (req, res) => {
  const { id } = req.params;
  try {
    const dana = await Dana.findByPk(id);
    if (dana) {
      await dana.destroy();
      res.json({ message: 'Dana deleted' });
    } else {
      res.status(404).json({ error: 'Dana not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};