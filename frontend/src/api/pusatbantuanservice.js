import api from './api';

const createPusatbantuan = async (pertanyaan, jawaban) => {
  try {
    const response = await api.post('/pusatbantuan', { pertanyaan, jawaban });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Terjadi kesalahan saat mengajukan pertanyaan');
  }
};

export default {
  createPusatbantuan,
};
