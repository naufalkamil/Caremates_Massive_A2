const express = require("express");
const app = express();
const router = express.Router();
const danaController = require("../controllers/danaController");


  // ROUTING dana
  // Ambil data semua dana
  router.get("/", danaController.getAllDana);
  
  //method post menambahkan dana baru
  router.post("/", danaController.createNewDana);
  
  // PUT method mengupdate data dana dengan id
  router.put("/:id",danaController.updateDanaById);
  
  //method delete
  router.delete("/:id",danaController.deleteDanaById);
  
  // method get dengan parameter id
  router.get("/:id",danaController.getDanaById);
  
module.exports = router;