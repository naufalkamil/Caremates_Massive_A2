const express = require("express");
const app = express();
const router = express.Router();
const penanggungjawabController = require("../controllers/penanggungjawabController");


  // ROUTING penanggungjawab
  // Ambil data semua penanggungjawab
  router.get("/", penanggungjawabController.getAllPenanggungjawab);
  
  //method post menambahkan penanggungjawab baru
  router.post("/", penanggungjawabController.createNewPenanggungjawab);
  
  // PUT method mengupdate data penanggungjawab dengan id
  router.put("/:id",penanggungjawabController.updatePenanggungjawabById);
  
  //method delete
  router.delete("/:id",penanggungjawabController.deletePenanggungjawabById);
  
  // method get dengan parameter id
  router.get("/:id",penanggungjawabController.getPenanggungjawabById);
  
module.exports = router;