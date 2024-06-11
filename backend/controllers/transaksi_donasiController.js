const database =require("../database.js");

const getAllTransaksi_donasi = (req, res) => {
    database.query(`SELECT * FROM transaksi_donasi`, (err, results) => {
        if (err) {
          res.status(500).json({ error: "something wrong"});
          throw err;
        }
        console.log(results);
        res.json({results});
      });
};

const getTransaksi_donasiById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400).json({
        error: "Silahkan isi field id transaksi_donasi"
        });
    }
    database.query(`SELECT * FROM transaksi_donasi WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                error: "Error while getting transaksi_donasi with id"
            });
        }  
        if(results.length === 0) {
            return res.json({
                message: "transaksi_donasi Not Found",
                results: []
            });
        }
        res.json({ results });
    });
};

const createNewTransaksi_donasi = (req, res) => {
    const{ id_dana, tgl_transaksi, nominal, doa } = req.body;
    if(!id_dana || !tgl_transaksi || !nominal || !doa){
        return res.status(400).json({
        error: "silahkan isi field id_dana, tgl_transaksi, nominal, doa"
        });
    }
    database.query(
        `INSERT INTO transaksi_donasi (id_dana, tgl_transaksi, nominal, doa) VALUES (?, ?, ?, ?)`,
        [id_dana, tgl_transaksi, nominal, doa],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while inserting new transaksi_donasi!",
            });
          }
          if (results.affectedRows > 0) {
            console.log(results);
            return res.json({
              message: "New transaksi_donasi Created!",
            });
          }
          return res.status(500).json({
            error: "No transaksi_donasi created!",
          });
        }
      );
}   
const updateTransaksi_donasiById = (req, res) => {
    const {id} = req.params;
    const { id_dana, tgl_transaksi, nominal, doa } = req.body;
    if ( !id || !id_dana || !tgl_transaksi || !nominal || !doa ) {
        return  res.status(400).json({
        error: "Silahkan isi field id, id_dana, tgl_transaksi, nominal, doa"
        });
    }
    database.query(`UPDATE transaksi_donasi SET id_dana = ?, tgl_transaksi = ?, nominal = ?, doa = ? WHERE id = ?`, [id_dana, tgl_transaksi, nominal, doa, id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Error while Updating transaksi_donasi",
            });
        }
        console.log(results);

        if(results.affectedRows === 0){
            return res.status(400).json({
                error: "transaksi_donasi dengan ID " + id + " tidak ditemukan, gagal update",
            });
        }
        return res.json({
            message: "Data transaksi_donasi dengan ID " + id + " telah diubah"
        });
    });
}

const deleteTransaksi_donasiById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400),json({
        error: "Silahkan isi field id transaksi_donasi"
        });
    }
    database.query(`DELETE FROM transaksi_donasi WHERE id = ?`,[id], (err, results) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                error: "Error while deleting transaksi_donasi"
            });
        }
        if(results.affectedRows === 0) {
            return res.status(400).json({
                error:`transaksi_donasi dengan ID ${id} tidak ditemukan, gagal dihapus`
            })
        }
        res.json({ message: `transaksi_donasi dengan ID ${id} telah dihapus`});
    })
};

module.exports = {
    getAllTransaksi_donasi, 
    getTransaksi_donasiById,
    createNewTransaksi_donasi,
    updateTransaksi_donasiById,
    deleteTransaksi_donasiById, 
}