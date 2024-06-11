const express = require("express");
const app = express();
const router = express.Router();
const lembagaController = require("../controllers/lembagaController");


  // ROUTING lembaga
  // Ambil data semua lembaga
  router.get("/", lembagaController.getAllLembaga);
  
  //method post menambahkan lembaga baru
  router.post("/", lembagaController.createNewLembaga);
  
  // PUT method mengupdate data lembaga dengan id
  router.put("/:id",lembagaController.updateLembagaById);
  
  //method delete
  router.delete("/:id",lembagaController.deleteLembagaById);
  
  // method get dengan parameter id
  router.get("/:id",lembagaController.getLembagaById);
  
module.exports = router;