import Lembaga from '../models/lembagaModels.js';

export const getLembagas = async (req, res) => {
  try {
    const lembagas = await Lembaga.findAll();
    res.json(lembagas);
  } catch (error) {
    res.status(500).json({ msg: "tidak bisa menemukan lembaga" });
  }
};

export const createLembaga = async (req, res) => {
  const {
    id_user,
    nama_lembaga,
    alamat_lembaga,
    telp,
    email_lembaga,
    web_lembaga,
    nama_pj,
    jabatan_pj,
    telp_pj,
    email_pj,
    no_akta_l,
    no_izin_l,
    dok_resmi,
    detail_l,
    nama_kontakdarurat,
    telp_kontakdarurat,
    foto_galeri,
    foto_sampul,
    foto_profil,
    no_rek,
    ktp,
    bank,
    jml_tanggungan
  } = req.body;

  try {
    const newLembaga = await Lembaga.create({
      id_user,
      nama_lembaga,
      alamat_lembaga,
      telp,
      email_lembaga,
      web_lembaga,
      nama_pj,
      jabatan_pj,
      telp_pj,
      email_pj,
      no_akta_l,
      no_izin_l,
      dok_resmi,
      detail_l,
      nama_kontakdarurat,
      telp_kontakdarurat,
      foto_galeri,
      foto_sampul,
      foto_profil,
      no_rek,
      ktp,
      bank,
      jml_tanggungan
    });
    res.status(201).json(newLembaga);
  } catch (error) {
    console.error('Kesalahan saat membuat lembaga baru:', error);
    res.status(500).json({ msg: "Terjadi kesalahan saat membuat lembaga baru" });
  }
};

export const getLembagaById = async (req, res) => {
  const { id } = req.params;
  try {
    const lembaga = await Lembaga.findByPk(id);
    if (lembaga) {
      res.json(lembaga);
    } else {
      res.status(404).json({ error: 'Lembaga not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateLembaga = async (req, res) => {
  const { id } = req.params;
  const {
    id_user,
    nama_lembaga,
    alamat_lembaga,
    telp,
    email_lembaga,
    web_lembaga,
    nama_pj,
    jabatan_pj,
    telp_pj,
    email_pj,
    no_akta_l,
    no_izin_l,
    dok_resmi,
    detail_l,
    nama_kontakdarurat,
    telp_kontakdarurat,
    foto_galeri,
    foto_sampul,
    foto_profil,
    no_rek,
    ktp,
    bank,
    jml_tanggungan
  } = req.body;

  try {
    const lembaga = await Lembaga.findByPk(id);
    if (lembaga) {
      lembaga.id_user = id_user;
      lembaga.nama_lembaga = nama_lembaga;
      lembaga.alamat_lembaga = alamat_lembaga;
      lembaga.telp = telp;
      lembaga.email_lembaga = email_lembaga;
      lembaga.web_lembaga = web_lembaga;
      lembaga.nama_pj = nama_pj;
      lembaga.jabatan_pj = jabatan_pj;
      lembaga.telp_pj = telp_pj;
      lembaga.email_pj = email_pj;
      lembaga.no_akta_l = no_akta_l;
      lembaga.no_izin_l = no_izin_l;
      lembaga.dok_resmi = dok_resmi;
      lembaga.detail_l = detail_l;
      lembaga.nama_kontakdarurat = nama_kontakdarurat;
      lembaga.telp_kontakdarurat = telp_kontakdarurat;
      lembaga.foto_galeri = foto_galeri;
      lembaga.foto_sampul = foto_sampul;
      lembaga.foto_profil = foto_profil;
      lembaga.no_rek = no_rek;
      lembaga.ktp = ktp;
      lembaga.bank = bank;
      lembaga.jml_tanggungan = jml_tanggungan;
      await lembaga.save();
      res.json(lembaga);
    } else {
      res.status(404).json({ error: 'Lembaga not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLembaga = async (req, res) => {
  const { id } = req.params;
  try {
    const lembaga = await Lembaga.findByPk(id);
    if (lembaga) {
      await lembaga.destroy();
      res.json({ message: 'Lembaga deleted' });
    } else {
      res.status(404).json({ error: 'Lembaga not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
