const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth_middleware');
const {
  getCartItems,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} = require('../controllers/cart_controller'); // Ensure this path is correct

// Route to get all items in the user's cart
router.get('/cart', protect, getCartItems);

// Route to add an item to the cart
router.post('/cart', protect, addToCart);

// Route to update a cart item
router.put('/cart/:id', protect, updateCartItem);

// Route to remove an item from the cart
router.delete('/cart/:id', protect, removeFromCart);

// Route to clear all items from the cart
router.delete('/cart', protect, clearCart);

module.exports = router;
