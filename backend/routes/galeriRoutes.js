const express = require("express");
const app = express();
const router = express.Router();
const galeriController = require("../controllers/galeriController");


  // ROUTING galeri
  // Ambil data semua galeri
  router.get("/", galeriController.getAllGaleri);
  
  //method post menambahkan galeri baru
  router.post("/", galeriController.createNewGaleri);
  
  // PUT method mengupdate data galeri dengan id
  router.put("/:id",galeriController.updateGaleriById);
  
  //method delete
  router.delete("/:id",galeriController.deleteGaleriById);
  
  // method get dengan parameter id
  router.get("/:id",galeriController.getGaleriById);
  
module.exports = router;