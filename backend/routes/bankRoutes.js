const express = require("express");
const app = express();
const router = express.Router();
const bankController = require("../controllers/bankController");


  // ROUTING admin
  // Ambil data semua admin
  router.get("/", bankController.getAllBank);
  
  //method post menambahkan admin baru
  router.post("/", bankController.createNewBank);
  
  // PUT method mengupdate data user dengan id
  router.put("/:id",bankController.updateBankById);
  
  //method delete
  router.delete("/:id",bankController.deleteBankById);
  
  // method get dengan parameter id
  router.get("/:id",bankController.getBankById);
  
module.exports = router;