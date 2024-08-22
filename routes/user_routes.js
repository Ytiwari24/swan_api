const express = require('express');
const { registerUser, loginUser, updateUser, getUserData } = require('../controllers/user_controller');
const router = express.Router();
const protect = require('../middleware/auth_middleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', protect, getUserData);

// Protected route for updating user information
router.put('/update', protect, updateUser);

module.exports = router;
