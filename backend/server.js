const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./database");
const PORT = 8000;
const adminRoutes = require("./routes/adminRoutes");
const pusatbantuanRoutes = require("./routes/pusatbantuanRoutes");
const lembagaRoutes = require("./routes/lembagaRoutes");
const penanggungjawabRoutes = require("./routes/penanggungjawabRoutes");
const bankRoutes = require("./routes/bankRoutes");
const galeriRoutes = require("./routes/galeriRoutes");
const danaRoutes = require("./routes/danaController");
const transaksi_donasiRoutes = require("./routes/transaksi_donasiRoutes");
const transaksi_lembagaRoutes = require("./routes/transaksi_lembagaRoutes");
const log_lembagaRoutes = require("./routes/log_lembagaRoutes");

// gunakan cors
app.use(cors());
// Middleware
// Ambil data dari client yang dikirim berbentuk json
app.use(express.json());

// Menangangi data dari client atau browser
app.use(express.urlencoded({ extended: true }));

// ROUTE http://localhost:8000/
// METHOD GET
app.get("/", (req, res) => {
  res.json({
    message: "Berhasil melakukan routing✨",
  });
});

// ROUTES
app.use("/api/admin", adminRoutes);
app.use("/api/pusatbantuan", pusatbantuanRoutes);
app.use("/api/lembaga", lembagaRoutes);
app.use("/api/penanggungjawab", penanggungjawabRoutes);
app.use("/api/bank", bankRoutes);
app.use("/api/galeri", galeriRoutes);
app.use("/api/dana", danaRoutes);
app.use("/api/transaksi_donasi", transaksi_donasiRoutes);
app.use("/api/transaksi_lembaga", transaksi_lembagaRoutes);
app.use("/api/log_lembaga", log_lembagaRoutes);

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );