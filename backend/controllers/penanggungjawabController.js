const database =require("../database.js");

const getAllPenanggungjawab = (req, res) => {
    database.query(`SELECT * FROM penanggungjawab`, (err, results) => {
        if (err) {
          res.status(500).json({ error: "something wrong"});
          throw err;
        }
        console.log(results);
        res.json({results});
      });
};

const getPenanggungjawabById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400).json({
        error: "Silahkan isi field id penanggungjawab"
        });
    }
    database.query(`SELECT * FROM penanggungjawab WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                error: "Error while getting penanggungjawab with id"
            });
        }  
        if(results.length === 0) {
            return res.json({
                message: "penanggungjawab Not Found",
                results: []
            });
        }
        res.json({ results });
    });
};

const createNewPenanggungjawab = (req, res) => {
    const{ nama, 
        jabatan, 
        nomor_telepon, 
        email, 
        foto_ktp, 
        nama_kontak_darurat, 
        nomor_kontak_darurat, 
        foto_galeri, 
        id_lembaga } = req.body;
    if(!nama || !jabatan || !nomor_telepon || !email || !nama_kontak_darurat || !nomor_kontak_darurat || !id_lembaga){
        return res.status(400).json({
        error: "silahkan isi field nama, jabatan, nomor_telepon, email, foto_ktp, nama_kontak_darurat, nomor_kontak_darurat, foto_galeri, id_lembaga"
        });
    }
    database.query(
        `INSERT INTO penanggungjawab (nama, jabatan, nomor_telepon, email, foto_ktp, nama_kontak_darurat, nomor_kontak_darurat, foto_galeri, id_lembaga) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [nama, jabatan, nomor_telepon, email, foto_ktp, nama_kontak_darurat, nomor_kontak_darurat, foto_galeri, id_lembaga],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while inserting new penanggungjawab!",
            });
          }
          if (results.affectedRows > 0) {
            console.log(results);
            return res.json({
              message: "New penanggungjawab Created!",
            });
          }
          return res.status(500).json({
            error: "No penanggungjawab created!",
          });
        }
      );
}   
const updatePenanggungjawabById = (req, res) => {
    const {id} = req.params;
    const { nama, jabatan, nomor_telepon, email, foto_ktp, nama_kontak_darurat, nomor_kontak_darurat, foto_galeri, id_lembaga } = req.body;
    if ( !id || !nama || !jabatan || !nomor_telepon || !email || !nama_kontak_darurat || !nomor_kontak_darurat || !id_lembaga ) {
        return  res.status(400).json({
        error: "Silahkan isi field nama, jabatan, nomor_telepon, email, foto_ktp, nama_kontak_darurat, nomor_kontak_darurat, foto_galeri, id_lembaga"
        });
    }
    database.query(`UPDATE penanggungjawab SET nama = ?, jabatan = ?, nomor_telepon = ?, email = ?, foto_ktp = ?, nama_kontak_darurat = ?, nomor_kontak_darurat = ?, foto_galeri = ?, id_lembaga = ? WHERE id = ?`, [nama, jabatan, nomor_telepon, email, foto_ktp, nama_kontak_darurat, nomor_kontak_darurat, foto_galeri, id_lembaga, id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Error while Updating penanggungjawab",
            });
        }
        console.log(results);

        if(results.affectedRows === 0){
            return res.status(400).json({
                error: "penanggungjawab dengan ID " + id + " tidak ditemukan, gagal update",
            });
        }
        return res.json({
            message: "Data penanggungjawab dengan ID " + id + " telah diubah"
        });
    });
}

const deletePenanggungjawabById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400),json({
        error: "Silahkan isi field id penanggungjawab"
        });
    }
    database.query(`DELETE FROM penanggungjawab WHERE id = ?`,[id], (err, results) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                error: "Error while deleting penanggungjawab"
            });
        }
        if(results.affectedRows === 0) {
            return res.status(400).json({
                error:`penanggungjawab dengan ID ${id} tidak ditemukan, gagal dihapus`
            })
        }
        res.json({ message: `penanggungjawab dengan ID ${id} telah dihapus`});
    })
};

module.exports = {
    getAllPenanggungjawab, 
    getPenanggungjawabById,
    createNewPenanggungjawab,
    updatePenanggungjawabById,
    deletePenanggungjawabById, 
}