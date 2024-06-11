const express = require("express");
const app = express();
const router = express.Router();
const adminController = require("../controllers/adminController");


  // ROUTING admin
  // Ambil data semua admin
  router.get("/", adminController.getAllAdmin);
  
  //method post menambahkan admin baru
  router.post("/", adminController.createNewAdmin);
  
  // PUT method mengupdate data admin dengan id
  router.put("/:id",adminController.updateAdminById);
  
  //method delete
  router.delete("/:id",adminController.deleteAdminById);
  
  // method get dengan parameter id
  router.get("/:id",adminController.getAdminById);
  
module.exports = router;