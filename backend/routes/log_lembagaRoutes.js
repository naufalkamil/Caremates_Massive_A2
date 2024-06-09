const express = require("express");
const app = express();
const router = express.Router();
const log_lembagaController = require("../controllers/log_lembagaController");


  // ROUTING admin
  // Ambil data semua admin
  router.get("/", log_lembagaController.getAllLog_lembaga);
  
  //method post menambahkan admin baru
  router.post("/", log_lembagaController.createNewLog_lembaga);
  
  // PUT method mengupdate data admin dengan id
  router.put("/:id",log_lembagaController.updateLog_lembagaById);
  
  //method delete
  router.delete("/:id",log_lembagaController.deleteLog_lembagaById);
  
  // method get dengan parameter id
  router.get("/:id",log_lembagaController.getLog_lembagaById);
  
module.exports = router;