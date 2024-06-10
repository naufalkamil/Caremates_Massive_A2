const database =require("../database.js");

const getAllPusatbantuan = (req, res) => {
    database.query(`SELECT * FROM pusatbantuan`, (err, results) => {
        if (err) {
          res.status(500).json({ error: "something wrong"});
          throw err;
        }
        console.log(results);
        res.json({results});
      });
};

const getPusatbantuanById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400).json({
        error: "Silahkan isi field id pusatbantuan"
        });
    }
    database.query(`SELECT * FROM pusatbantuan WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                error: "Error while getting pusatbantuan with id"
            });
        }  
        if(results.length === 0) {
            return res.json({
                message: "pusatbantuan Not Found",
                results: []
            });
        }
        res.json({ results });
    });
};

const createNewPusatbantuan = (req, res) => {
    const{ pertanyaan, jawaban } = req.body;
    if(!pertanyaan ){
        return res.status(400).json({
        error: "silahkan isi field pertanyaan"
        });
    }
    database.query(
        `INSERT INTO pusatbantuan (pertanyaan, jawaban) VALUES (?, ?)`,
        [pertanyaan, jawaban],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while inserting new pusatbantuan!",
            });
          }
          if (results.affectedRows > 0) {
            console.log(results);
            return res.json({
              message: "New pusatbantuan Created!",
            });
          }
          return res.status(500).json({
            error: "No pusatbantuan created!",
          });
        }
      );
}   
const updatePusatbantuanById = (req, res) => {
    const {id} = req.params;
    const { pertanyaan, jawaban } = req.body;
    if ( !id || !pertanyaan || !jawaban ) {
        return  res.status(400).json({
        error: "Silahkan isi field id, pertanyaan, dan jawaban"
        });
    }
    database.query(`UPDATE pusatbantuan SET pertanyaan = ?, jawaban = ? WHERE id = ?`, [pertanyaan, jawaban, id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Error while Updating pusatbantuan",
            });
        }
        console.log(results);

        if(results.affectedRows === 0){
            return res.status(400).json({
                error: "pusatbantuan dengan ID " + id + " tidak ditemukan, gagal update",
            });
        }
        return res.json({
            message: "Data pusatbantuan dengan ID " + id + " telah diubah"
        });
    });
}

const deletePusatbantuanById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400),json({
        error: "Silahkan isi field id pusatbantuan"
        });
    }
    database.query(`DELETE FROM pusatbantuan WHERE id = ?`,[id], (err, results) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                error: "Error while deleting pusatbantuan"
            });
        }
        if(results.affectedRows === 0) {
            return res.status(400).json({
                error:`pusatbantuan dengan ID ${id} tidak ditemukan, gagal dihapus`
            })
        }
        res.json({ message: `pusatbantuan dengan ID ${id} telah dihapus`});
    })
};

module.exports = {
    getAllPusatbantuan, 
    getPusatbantuanById,
    createNewPusatbantuan,
    updatePusatbantuanById,
    deletePusatbantuanById, 
}