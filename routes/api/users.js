// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.get('/', usersCtrl.index)

router.post('/', usersCtrl.create);
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);


module.exports = router;
