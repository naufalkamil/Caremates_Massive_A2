const database =require("../database.js");

const getAllLog_lembaga = (req, res) => {
    database.query(`SELECT * FROM log_lembaga`, (err, results) => {
        if (err) {
          res.status(500).json({ error: "something wrong"});
          throw err;
        }
        console.log(results);
        res.json({results});
      });
};

const getLog_lembagaById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400).json({
        error: "Silahkan isi field id log_lembaga"
        });
    }
    database.query(`SELECT * FROM log_lembaga WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                error: "Error while getting log_lembaga with id"
            });
        }  
        if(results.length === 0) {
            return res.json({
                message: "log_lembaga Not Found",
                results: []
            });
        }
        res.json({ results });
    });
};

const createNewLog_lembaga = (req, res) => {
    const{ email, kata_sandi, verified } = req.body;
    if(!email || !kata_sandi ){
        return res.status(400).json({
        error: "silahkan isi field email dan kata_sandi"
        });
    }
    database.query(
        `INSERT INTO log_lembaga (email, kata_sandi, verified) VALUES (?, ?, ?)`,
        [email, kata_sandi, verified],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while inserting new log_lembaga!",
            });
          }
          if (results.affectedRows > 0) {
            console.log(results);
            return res.json({
              message: "New log_lembaga Created!",
            });
          }
          return res.status(500).json({
            error: "No log_lembaga created!",
          });
        }
      );
}   
const updateLog_lembagaById = (req, res) => {
    const {id} = req.params;
    const { email, kata_sandi, verified } = req.body;
    if ( !id || !email || !kata_sandi ) {
        return  res.status(400).json({
        error: "Silahkan isi field id, email, dan kata_sandi"
        });
    }
    database.query(`UPDATE log_lembaga SET email = ?, kata_sandi = ?, verified = ? WHERE id = ?`, [email, kata_sandi, verified, id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Error while Updating log_lembaga",
            });
        }
        console.log(results);

        if(results.affectedRows === 0){
            return res.status(400).json({
                error: "log_lembaga dengan ID " + id + " tidak ditemukan, gagal update",
            });
        }
        return res.json({
            message: "Data log_lembaga dengan ID " + id + " telah diubah"
        });
    });
}

const deleteLog_lembagaById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400),json({
        error: "Silahkan isi field id log_lembaga"
        });
    }
    database.query(`DELETE FROM log_lembaga WHERE id = ?`,[id], (err, results) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                error: "Error while deleting log_lembaga"
            });
        }
        if(results.affectedRows === 0) {
            return res.status(400).json({
                error:`log_lembaga dengan ID ${id} tidak ditemukan, gagal dihapus`
            })
        }
        res.json({ message: `log_lembaga dengan ID ${id} telah dihapus`});
    })
};

const login = (req, res) => {
    const { email, kata_sandi } = req.body;
  
    // Periksa apakah email dan kata sandi telah diberikan
    if (!email || !kata_sandi) {
      return res.status(400).json({ error: "Silakan masukkan email dan kata sandi" });
    }
  
    // Query ke database untuk mendapatkan pengguna dengan email yang diberikan
    database.query(
      "SELECT * FROM log_lembaga WHERE email = ?",
      [email],
      (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
  
        // Periksa apakah pengguna dengan email yang diberikan ditemukan
        if (results.length === 0) {
          return res.status(401).json({ error: "Email tidak ditemukan" });
        }
  
        const user = results[0];
  
        // Verifikasi kata sandi
        if (user.kata_sandi !== kata_sandi) {
          return res.status(401).json({ error: "Kata sandi salah" });
        }
  
        // Jika email dan kata sandi cocok, kirimkan respons sukses
        return res.json({ message: "Berhasil login" });
      }
    );
  };

module.exports = {
    getAllLog_lembaga, 
    getLog_lembagaById,
    createNewLog_lembaga,
    updateLog_lembagaById,
    deleteLog_lembagaById, 
    login,
}