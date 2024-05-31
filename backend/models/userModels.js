import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/database.js';

const User = db.define('users', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('0', '1'),
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false, 
});

export default User;