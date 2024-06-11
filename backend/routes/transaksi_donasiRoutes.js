const express = require("express");
const app = express();
const router = express.Router();
const transaksi_donasiController = require("../controllers/transaksi_donasiController");


  // ROUTING admin
  // Ambil data semua admin
  router.get("/", transaksi_donasiController.getAllTransaksi_donasi);
  
  //method post menambahkan admin baru
  router.post("/", transaksi_donasiController.createNewTransaksi_donasi);
  
  // PUT method mengupdate data admin dengan id
  router.put("/:id",transaksi_donasiController.updateTransaksi_donasiById);
  
  //method delete
  router.delete("/:id",transaksi_donasiController.deleteTransaksi_donasiById);
  
  // method get dengan parameter id
  router.get("/:id",transaksi_donasiController.getTransaksi_donasiById);
  
module.exports = router;