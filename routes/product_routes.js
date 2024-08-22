const express = require('express');
const { addProduct } = require('../controllers/product_controller');
const protect = require('../middleware/auth_middleware');
const router = express.Router();

router.post('/add', protect, addProduct);

module.exports = router;
