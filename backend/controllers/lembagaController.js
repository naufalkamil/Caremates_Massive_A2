const database =require("../database.js");

const getAllLembaga = (req, res) => {
    database.query(`SELECT * FROM lembaga`, (err, results) => {
        if (err) {
          res.status(500).json({ error: "something wrong"});
          throw err;
        }
        console.log(results);
        res.json({results});
      });
};

const getLembagaById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400).json({
        error: "Silahkan isi field id lembaga"
        });
    }
    database.query(`SELECT * FROM lembaga WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                error: "Error while getting lembaga with id"
            });
        }  
        if(results.length === 0) {
            return res.json({
                message: "lembaga Not Found",
                results: []
            });
        }
        res.json({ results });
    });
};

const createNewLembaga = (req, res) => {
    const{nama, alamat, nomor_telepon, website, media_sosial, nomor_akta, nomor_izin, dokumen_resmi, logo, foto_sampul, jumlah_tanggungan, detail } = req.body;
    if(!nama || !alamat || !nomor_telepon || !website || !media_sosial || !nomor_akta || !nomor_izin || !jumlah_tanggungan || !detail){
        return res.status(400).json({
        error: "silahkan isi field nama, alamat, nomor_telepon, website, media_sosial, nomor_akta, nomor_izin, dokumen_resmi, logo, foto_sampul, jumlah_tanggungan, detail"
        });
    }
    database.query(
        `INSERT INTO lembaga (nama, alamat, nomor_telepon, website, media_sosial, nomor_akta, nomor_izin, dokumen_resmi, logo, foto_sampul, jumlah_tanggungan, detail) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [nama, alamat, nomor_telepon, website, media_sosial, nomor_akta, nomor_izin, dokumen_resmi, logo, foto_sampul, jumlah_tanggungan, detail],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while inserting new lembaga!",
            });
          }
          if (results.affectedRows > 0) {
            console.log(results);
            return res.json({
              message: "New lembaga Created!",
            });
          }
          return res.status(500).json({
            error: "No lembaga created!",
          });
        }
      );
}   
const updateLembagaById = (req, res) => {
    const {id} = req.params;
    const { nama, alamat, nomor_telepon, website, media_sosial, nomor_akta, nomor_izin, dokumen_resmi, logo, foto_sampul, jumlah_tanggungan, detail } = req.body;
    if ( !id || !nama || !alamat || !email || !nomor_telepon || !website || !media_sosial || !kata_sandi || !nomor_akta || !nomor_izin || !dokumen_resmi || !logo || !foto_sampul || !jumlah_tanggungan || !detail ) {
        return  res.status(400).json({
        error: "Silahkan isi field id, nama, alamat, nomor_telepon, website, media_sosial, nomor_akta, nomor_izin, dokumen_resmi, logo, foto_sampul, jumlah_tanggungan, detail"
        });
    }
    database.query(`UPDATE lembaga SET nama = ?, alamat = ?, email = ?, nomor_telepon = ?, website = ?, media_sosial = ?, kata_sandi = ?, nomor_akta = ?, nomor_izin = ?, dokumen_resmi = ?, logo = ?, foto_sampul = ?, jumlah_tanggungan = ?, detail = ? WHERE id = ?`, [nama, alamat, nomor_telepon, website, media_sosial, nomor_akta, nomor_izin, dokumen_resmi, logo, foto_sampul, jumlah_tanggungan, detail, id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Error while Updating lembaga",
            });
        }
        console.log(results);

        if(results.affectedRows === 0){
            return res.status(400).json({
                error: "lembaga dengan ID " + id + " tidak ditemukan, gagal update",
            });
        }
        return res.json({
            message: "Data lembaga dengan ID " + id + " telah diubah"
        });
    });
}

const deleteLembagaById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400),json({
        error: "Silahkan isi field id lembaga"
        });
    }
    database.query(`DELETE FROM lembaga WHERE id = ?`,[id], (err, results) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                error: "Error while deleting lembaga"
            });
        }
        if(results.affectedRows === 0) {
            return res.status(400).json({
                error:`lembaga dengan ID ${id} tidak ditemukan, gagal dihapus`
            })
        }
        res.json({ message: `lembaga dengan ID ${id} telah dihapus`});
    })
};

module.exports = {
    getAllLembaga, 
    getLembagaById,
    createNewLembaga,
    updateLembagaById,
    deleteLembagaById, 
}