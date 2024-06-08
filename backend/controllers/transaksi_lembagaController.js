const database =require("../database.js");

const getAllTransaksi_lembaga = (req, res) => {
    database.query(`SELECT * FROM transaksi_lembaga`, (err, results) => {
        if (err) {
          res.status(500).json({ error: "something wrong"});
          throw err;
        }
        console.log(results);
        res.json({results});
      });
};

const getTransaksi_lembagaById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400).json({
        error: "Silahkan isi field id transaksi_lembaga"
        });
    }
    database.query(`SELECT * FROM transaksi_lembaga WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                error: "Error while getting transaksi_lembaga with id"
            });
        }  
        if(results.length === 0) {
            return res.json({
                message: "transaksi_lembaga Not Found",
                results: []
            });
        }
        res.json({ results });
    });
};

const createNewTransaksi_lembaga = (req, res) => {
    const{ id_transaksidonasi, nominal_penarikan, detail_penarikan } = req.body;
    if(!id_transaksidonasi || !nominal_penarikan || !detail_penarikan){
        return res.status(400).json({
        error: "silahkan isi field id_transaksidonasi, nominal_penarikan, detail_penarikan"
        });
    }
    database.query(
        `INSERT INTO transaksi_lembaga (id_transaksidonasi, nominal_penarikan, detail_penarikan) VALUES (?, ?, ?)`,
        [id_transaksidonasi, nominal_penarikan, detail_penarikan],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while inserting new transaksi_lembaga!",
            });
          }
          if (results.affectedRows > 0) {
            console.log(results);
            return res.json({
              message: "New transaksi_lembaga Created!",
            });
          }
          return res.status(500).json({
            error: "No transaksi_lembaga created!",
          });
        }
      );
}   
const updateTransaksi_lembagaById = (req, res) => {
    const {id} = req.params;
    const { id_transaksidonasi, nominal_penarikan, detail_penarikan } = req.body;
    if ( !id || !id_transaksidonasi || !nominal_penarikan || !detail_penarikan) {
        return  res.status(400).json({
        error: "Silahkan isi field id, id_transaksidonasi, nominal_penarikan, detail_penarikan"
        });
    }
    database.query(`UPDATE transaksi_lembaga SET id_transaksidonasi = ?, nominal_penarikan = ?, detail_penarikan = ? WHERE id = ?`, [id_transaksidonasi, nominal_penarikan, detail_penarikan, id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Error while Updating transaksi_lembaga",
            });
        }
        console.log(results);

        if(results.affectedRows === 0){
            return res.status(400).json({
                error: "transaksi_lembaga dengan ID " + id + " tidak ditemukan, gagal update",
            });
        }
        return res.json({
            message: "Data transaksi_lembaga dengan ID " + id + " telah diubah"
        });
    });
}

const deleteTransaksi_lembagaById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400),json({
        error: "Silahkan isi field id transaksi_lembaga"
        });
    }
    database.query(`DELETE FROM transaksi_lembaga WHERE id = ?`,[id], (err, results) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                error: "Error while deleting transaksi_lembaga"
            });
        }
        if(results.affectedRows === 0) {
            return res.status(400).json({
                error:`transaksi_lembaga dengan ID ${id} tidak ditemukan, gagal dihapus`
            })
        }
        res.json({ message: `transaksi_lembaga dengan ID ${id} telah dihapus`});
    })
};

module.exports = {
    getAllTransaksi_lembaga, 
    getTransaksi_lembagaById,
    createNewTransaksi_lembaga,
    updateTransaksi_lembagaById,
    deleteTransaksi_lembagaById, 
}