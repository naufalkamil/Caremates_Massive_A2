// src/server.js
import express from 'express';
import db from './config/database.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());

db.authenticate()
  .then(() => console.log('Database Connected...'))
  .catch(err => console.log('Error: ' + err));

db.sync()
  .then(() => console.log('Tables synced...'))
  .catch(err => console.log('Error: ' + err));

app.use('/api/users', userRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
