const express = require("express");
const app = express();
const router = express.Router();
const pusatbantuanController = require("../controllers/pusatbantuanController");


  // ROUTING pusatbantuan
  // Ambil data semua pusatbantuan
  router.get("/", pusatbantuanController.getAllPusatbantuan);
  
  //method post menambahkan pusatbantuan baru
  router.post("/", pusatbantuanController.createNewPusatbantuan);
  
  // PUT method mengupdate data pusatbantuan dengan id
  router.put("/:id",pusatbantuanController.updatePusatbantuanById);
  
  //method delete
  router.delete("/:id",pusatbantuanController.deletePusatbantuanById);
  
  // method get dengan parameter id
  router.get("/:id",pusatbantuanController.getPusatbantuanById);
  
module.exports = router;