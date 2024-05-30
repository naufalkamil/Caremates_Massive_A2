import User from '../models/userModels.js';


export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
    const { email, nama, password, role } = req.body;
    try {
      const newUser = await User.create({ email, nama, password, role });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Kesalahan saat membuat pengguna baru:', error);
      res.status(500).json({ msg: "Terjadi kesalahan saat membuat pengguna baru" });
    }
  };
  
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, nama, password, role } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.email = email;
      user.nama = nama;
      user.password = password;
      user.role = role;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
