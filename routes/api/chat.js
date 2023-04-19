const express = require('express');
const router = express.Router();

const chatCtrl = require('../../controllers/api/chat')

router.post('/authenticate', chatCtrl.createUsername)

module.exports = router;