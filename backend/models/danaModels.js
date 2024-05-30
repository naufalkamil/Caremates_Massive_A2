import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/database.js';
import Lembaga from './lembagaModels.js';

const Dana = db.define('dana', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  id_lembaga: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: Lembaga,
      key: 'id'
    }
  },
  tgl_pengajuan: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  rincian: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  nominal_butuh: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('prioritas', 'nonprioritas'),
    allowNull: false,
  },
}, {
  tableName: 'dana',
  timestamps: true,
});

Lembaga.hasMany(Dana, { foreignKey: 'id_lembaga' });
Dana.belongsTo(Lembaga, { foreignKey: 'id_lembaga' });

export default Dana;