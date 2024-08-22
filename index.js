require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user_routes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/', userRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
