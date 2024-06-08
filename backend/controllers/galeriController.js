const database =require("../database.js");

const getAllGaleri = (req, res) => {
    database.query(`SELECT * FROM galeri`, (err, results) => {
        if (err) {
          res.status(500).json({ error: "something wrong"});
          throw err;
        }
        console.log(results);
        res.json({results});
      });
};

const getGaleriById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400).json({
        error: "Silahkan isi field id galeri"
        });
    }
    database.query(`SELECT * FROM galeri WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                error: "Error while getting galeri with id"
            });
        }  
        if(results.length === 0) {
            return res.json({
                message: "galeri Not Found",
                results: []
            });
        }
        res.json({ results });
    });
};

const createNewGaleri = (req, res) => {
    const{ nama_file, file, id_lembaga } = req.body;
    if(!nama_file || !id_lembaga){
        return res.status(400).json({
        error: "silahkan isi field nama_file, file, id_lembaga"
        });
    }
    database.query(
        `INSERT INTO galeri (nama_file, file, id_lembaga) VALUES (?, ?, ?)`,
        [nama_file, file, id_lembaga],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while inserting new galeri!",
            });
          }
          if (results.affectedRows > 0) {
            console.log(results);
            return res.json({
              message: "New galeri Created!",
            });
          }
          return res.status(500).json({
            error: "No galeri created!",
          });
        }
      );
}   
const updateGaleriById = (req, res) => {
    const {id} = req.params;
    const { nama_file, file, id_lembaga } = req.body;
    if ( !id || !nama_file || !file || !id_lembaga ) {
        return  res.status(400).json({
        error: "Silahkan isi field id, nama_file, file, id_lembaga"
        });
    }
    database.query(`UPDATE galeri SET nama_file = ?, file = ?, id_lembaga = ? WHERE id = ?`, [nama_file, file, id_lembaga, id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Error while Updating galeri",
            });
        }
        console.log(results);

        if(results.affectedRows === 0){
            return res.status(400).json({
                error: "galeri dengan ID " + id + " tidak ditemukan, gagal update",
            });
        }
        return res.json({
            message: "Data galeri dengan ID " + id + " telah diubah"
        });
    });
}

const deleteGaleriById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400),json({
        error: "Silahkan isi field id galeri"
        });
    }
    database.query(`DELETE FROM galeri WHERE id = ?`,[id], (err, results) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                error: "Error while deleting galeri"
            });
        }
        if(results.affectedRows === 0) {
            return res.status(400).json({
                error:`galeri dengan ID ${id} tidak ditemukan, gagal dihapus`
            })
        }
        res.json({ message: `galeri dengan ID ${id} telah dihapus`});
    })
};

module.exports = {
    getAllGaleri, 
    getGaleriById,
    createNewGaleri,
    updateGaleriById,
    deleteGaleriById, 
}