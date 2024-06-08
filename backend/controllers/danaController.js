const database =require("../database.js");

const getAllDana = (req, res) => {
    database.query(`SELECT * FROM dana`, (err, results) => {
        if (err) {
          res.status(500).json({ error: "something wrong"});
          throw err;
        }
        console.log(results);
        res.json({results});
      });
};

const getDanaById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400).json({
        error: "Silahkan isi field id dana"
        });
    }
    database.query(`SELECT * FROM dana WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                error: "Error while getting dana with id"
            });
        }  
        if(results.length === 0) {
            return res.json({
                message: "dana Not Found",
                results: []
            });
        }
        res.json({ results });
    });
};

const createNewDana = (req, res) => {
    const{ id_lembaga, tgl_pengajuan, rincian, nominal_butuh, status } = req.body;
    if(!id_lembaga || !tgl_pengajuan || !rincian || !nominal_butuh || !status){
        return res.status(400).json({
        error: "silahkan isi field id_lembaga, tgl_pengajuan, rincian, nominal_butuh, status"
        });
    }
    database.query(
        `INSERT INTO dana (id_lembaga, tgl_pengajuan, rincian, nominal_butuh, status) VALUES (?, ?, ?, ?, ?)`,
        [id_lembaga, tgl_pengajuan, rincian, nominal_butuh, status],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while inserting new dana!",
            });
          }
          if (results.affectedRows > 0) {
            console.log(results);
            return res.json({
              message: "New dana Created!",
            });
          }
          return res.status(500).json({
            error: "No dana created!",
          });
        }
      );
}   
const updateDanaById = (req, res) => {
    const {id} = req.params;
    const { id_lembaga, tgl_pengajuan, rincian, nominal_butuh, status } = req.body;
    if ( !id || !id_lembaga || !tgl_pengajuan || !rincian || !nominal_butuh || !status ) {
        return  res.status(400).json({
        error: "Silahkan isi field id_lembaga, tgl_pengajuan, rincian, nominal_butuh, status"
        });
    }
    database.query(`UPDATE dana SET id_lembaga = ?, tgl_pengajuan = ?, rincian = ?, nominal_butuh = ?, status = ? WHERE id = ?`, [id_lembaga, tgl_pengajuan, rincian, nominal_butuh, status, id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Error while Updating dana",
            });
        }
        console.log(results);

        if(results.affectedRows === 0){
            return res.status(400).json({
                error: "dana dengan ID " + id + " tidak ditemukan, gagal update",
            });
        }
        return res.json({
            message: "Data dana dengan ID " + id + " telah diubah"
        });
    });
}

const deleteDanaById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400),json({
        error: "Silahkan isi field id dana"
        });
    }
    database.query(`DELETE FROM dana WHERE id = ?`,[id], (err, results) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                error: "Error while deleting dana"
            });
        }
        if(results.affectedRows === 0) {
            return res.status(400).json({
                error:`dana dengan ID ${id} tidak ditemukan, gagal dihapus`
            })
        }
        res.json({ message: `dana dengan ID ${id} telah dihapus`});
    })
};

module.exports = {
    getAllDana, 
    getDanaById,
    createNewDana,
    updateDanaById,
    deleteDanaById, 
}