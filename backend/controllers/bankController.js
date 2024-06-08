const database =require("../database.js");

const getAllBank = (req, res) => {
    database.query(`SELECT * FROM bank`, (err, results) => {
        if (err) {
          res.status(500).json({ error: "something wrong"});
          throw err;
        }
        console.log(results);
        res.json({results});
      });
};

const getBankById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400).json({
        error: "Silahkan isi field id bank"
        });
    }
    database.query(`SELECT * FROM bank WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                error: "Error while getting bank with id"
            });
        }  
        if(results.length === 0) {
            return res.json({
                message: "bank Not Found",
                results: []
            });
        }
        res.json({ results });
    });
};

const createNewBank = (req, res) => {
    const{ jenis_bank, atasnama, nomor_rekening, id_lembaga } = req.body;
    if(!jenis_bank || !atasnama || !nomor_rekening || !id_lembaga){
        return res.status(400).json({
        error: "jenis_bank, atasnama, nomor_rekening, id_lembaga"
        });
    }
    database.query(
        `INSERT INTO bank (jenis_bank, atasnama, nomor_rekening, id_lembaga) VALUES (?, ?, ?, ?)`,
        [jenis_bank, atasnama, nomor_rekening, id_lembaga],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while inserting new bank!",
            });
          }
          if (results.affectedRows > 0) {
            console.log(results);
            return res.json({
              message: "New bank Created!",
            });
          }
          return res.status(500).json({
            error: "No bank created!",
          });
        }
      );
}   
const updateBankById = (req, res) => {
    const {id} = req.params;
    const { jenis_bank, atasnama, nomor_rekening, id_lembaga } = req.body;
    if ( !id || !jenis_bank || !atasnama || !nomor_rekening || !id_lembaga ) {
        return  res.status(400).json({
        error: "Silahkan isi field id, username, dan password"
        });
    }
    database.query(`UPDATE bank SET jenis_bank = ?, atasnama = ?, nomor_rekening = ?, id_lembaga = ? WHERE id = ?`, [jenis_bank, atasnama, nomor_rekening, id_lembaga, id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Error while Updating bank",
            });
        }
        console.log(results);

        if(results.affectedRows === 0){
            return res.status(400).json({
                error: "bank dengan ID " + id + " tidak ditemukan, gagal update",
            });
        }
        return res.json({
            message: "Data bank dengan ID " + id + " telah diubah"
        });
    });
}

const deleteBankById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400),json({
        error: "Silahkan isi field id bank"
        });
    }
    database.query(`DELETE FROM bank WHERE id = ?`,[id], (err, results) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                error: "Error while deleting bank"
            });
        }
        if(results.affectedRows === 0) {
            return res.status(400).json({
                error:`bank dengan ID ${id} tidak ditemukan, gagal dihapus`
            })
        }
        res.json({ message: `bank dengan ID ${id} telah dihapus`});
    })
};

module.exports = {
    getAllBank, 
    getBankById,
    createNewBank,
    updateBankById,
    deleteBankById, 
}