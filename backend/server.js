const express = require("express");
const app = express();
const database = require("./database");

const PORT = 8000;

// middleware
// Ambil data dari client yang langsung dikirim berbentuk json
app.use(express.json());

// menangani data dari client atau browser
app.use(express.urlencoded({extended: true}));

// ROUTE http://localhost/
// METHOD GET
app.get('/', (req,res) => {
    res.json({
        message: "Berhasil melakukan routing"
    });
});

// Routing 
// ambil data semua user
app.get("/api/user", (req, res) =>{
    database.query(`SELECT * FROM user`, (err, results) => {
        if(err) {
            res.json(500).json({error: "Something wrong"});
            throw err;
        }
        console.log(results);
        res.json({results})
    });
});

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
