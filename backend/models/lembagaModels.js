import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/database.js';
import User from './userModels.js';

const Lembaga = db.define('lembaga', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  id_user: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: User,
      key: 'id'
    }
  },
  nama_lembaga: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  alamat_lembaga: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  email_lembaga: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  web_lembaga: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nama_pj: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  jabatan_pj: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telp_pj: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  email_pj: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  no_akta_l: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  no_izin_l: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dok_resmi: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  detail_l: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  nama_kontakdarurat: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telp_kontakdarurat: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  foto_galeri: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  foto_sampul: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  foto_profil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  no_rek: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ktp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bank: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  jml_tanggungan: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'lembaga',
  timestamps: true,
});

User.hasMany(Lembaga, { foreignKey: 'id_user' });
Lembaga.belongsTo(User, { foreignKey: 'id_user' });

export default Lembaga;