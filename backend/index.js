import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import lembagaRoutes from "./routes/lembagaRoutes.js";
import danaRoutes from "./routes/danaRoutes.js";
import transaksiDonasiRoutes from "./routes/transaksiDonasiRoutes.js";
import transaksiLembagaRoutes from "./routes/transaksiLembagaRoutes.js"; 
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/api/users', userRoutes); 
app.use('/api/lembagas', lembagaRoutes);  
app.use('/api/danas', danaRoutes); 
app.use('/api/transaksi-donasi', transaksiDonasiRoutes); 
app.use('/api/transaksi-lembaga', transaksiLembagaRoutes);
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server Up and Running...'));

db.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });