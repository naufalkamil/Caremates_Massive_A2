import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/database.js';
import TransaksiDonasi from './transaksiDonasiModels.js';  

const TransaksiLembaga = db.define('transaksi_lembaga', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  id_transaksi_donasi: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: TransaksiDonasi,
      key: 'id'
    }
  },
  nominal_penarikan: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true,
  },
  tgl_penarikan: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  detail_penarikan: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'transaksi_lembaga',
  timestamps: true,
});

TransaksiDonasi.hasMany(TransaksiLembaga, { foreignKey: 'id_transaksi_donasi' });
TransaksiLembaga.belongsTo(TransaksiDonasi, { foreignKey: 'id_transaksi_donasi' });

export default TransaksiLembaga;