import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/database.js';
import Dana from './danaModels.js'; 

const TransaksiDonasi = db.define('transaksi_donasi', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  id_dana: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: Dana,
      key: 'id'
    }
  },
  tgl_transaksi: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  nominal: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true,
  },
  doa: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'transaksi_donasi',
  timestamps: true,
});

Dana.hasMany(TransaksiDonasi, { foreignKey: 'id_dana' });
TransaksiDonasi.belongsTo(Dana, { foreignKey: 'id_dana' });

export default TransaksiDonasi;