const express = require('express');
const { registerUser, loginUser, getUserData } = require('../controllers/user_controller');
const router = express.Router();
const protect = require('../middleware/auth_middleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', protect, getUserData);

module.exports = router;
