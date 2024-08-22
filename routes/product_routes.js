// const express = require('express');
// const { addProduct } = require('../controllers/product_controller');
// const protect = require('../middleware/auth_middleware');
// const router = express.Router();

// router.post('/add', protect, addProduct);

// module.exports = router;



const express = require('express');
const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/product_controller');
const protect = require('../middleware/auth_middleware');
const router = express.Router();

// Protected route for adding a product
router.post('/add', protect, addProduct);

// Public route for getting all products
router.get('/products',protect, getProducts);

// Public route for getting a single product by ID
router.get('/:id', getProductById);

// Protected route for updating a product by ID
router.put('/:id', protect, updateProduct);

// Protected route for deleting a product by ID
router.delete('/:id', protect, deleteProduct);

module.exports = router;
