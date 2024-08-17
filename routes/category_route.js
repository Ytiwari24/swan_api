const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth_middleware');
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category_controller');

// Route: GET /api/categories
// Access: Private
router.get('/', protect, getCategories);

// Route: POST /api/categories
// Access: Private
router.post('/', protect, createCategory);

// Route: PUT /api/categories/:id
// Access: Private
router.put('/:id', protect, updateCategory);

// Route: DELETE /api/categories/:id
// Access: Private
router.delete('/:id', protect, deleteCategory);

module.exports = router;
