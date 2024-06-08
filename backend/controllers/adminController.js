const database =require("../database.js");

const getAllAdmin = (req, res) => {
    database.query(`SELECT * FROM admin`, (err, results) => {
        if (err) {
          res.status(500).json({ error: "something wrong"});
          throw err;
        }
        console.log(results);
        res.json({results});
      });
};

const getAdminById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400).json({
        error: "Silahkan isi field id admin"
        });
    }
    database.query(`SELECT * FROM admin WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                error: "Error while getting admin with id"
            });
        }  
        if(results.length === 0) {
            return res.json({
                message: "admin Not Found",
                results: []
            });
        }
        res.json({ results });
    });
};

const createNewAdmin = (req, res) => {
    const{ username, password } = req.body;
    if(!username || !password){
        return res.status(400).json({
        error: "silahkan isi field username dan password"
        });
    }
    database.query(
        `INSERT INTO admin (username, password) VALUES (?, ?)`,
        [username, password],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Error while inserting new admin!",
            });
          }
          if (results.affectedRows > 0) {
            console.log(results);
            return res.json({
              message: "New admin Created!",
            });
          }
          return res.status(500).json({
            error: "No admin created!",
          });
        }
      );
}   
const updateAdminById = (req, res) => {
    const {id} = req.params;
    const { username, password } = req.body;
    if ( !id || !username || !password ) {
        return  res.status(400).json({
        error: "Silahkan isi field id, username, dan password"
        });
    }
    database.query(`UPDATE admin SET username = ?, password = ? WHERE id = ?`, [username, password, id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: "Error while Updating admin",
            });
        }
        console.log(results);

        if(results.affectedRows === 0){
            return res.status(400).json({
                error: "Admin dengan ID " + id + " tidak ditemukan, gagal update",
            });
        }
        return res.json({
            message: "Data admin dengan ID " + id + " telah diubah"
        });
    });
}

const deleteAdminById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return  res.status(400),json({
        error: "Silahkan isi field id admin"
        });
    }
    database.query(`DELETE FROM admin WHERE id = ?`,[id], (err, results) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                error: "Error while deleting admin"
            });
        }
        if(results.affectedRows === 0) {
            return res.status(400).json({
                error:`Admin dengan ID ${id} tidak ditemukan, gagal dihapus`
            })
        }
        res.json({ message: `Admin dengan ID ${id} telah dihapus`});
    })
};

module.exports = {
    getAllAdmin, 
    getAdminById,
    createNewAdmin,
    updateAdminById,
    deleteAdminById, 
}