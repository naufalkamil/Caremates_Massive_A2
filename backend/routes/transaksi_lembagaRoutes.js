const express = require("express");
const app = express();
const router = express.Router();
const transaksi_lembagaController = require("../controllers/transaksi_lembagaController");


  // ROUTING admin
  // Ambil data semua admin
  router.get("/", transaksi_lembagaController.getAllTransaksi_lembaga);
  
  //method post menambahkan admin baru
  router.post("/", transaksi_lembagaController.createNewTransaksi_lembaga);
  
  // PUT method mengupdate data admin dengan id
  router.put("/:id",transaksi_lembagaController.updateTransaksi_lembagaById);
  
  //method delete
  router.delete("/:id",transaksi_lembagaController.deleteTransaksi_lembagaById);
  
  // method get dengan parameter id
  router.get("/:id",transaksi_lembagaController.getTransaksi_lembagaById);
  
module.exports = router;