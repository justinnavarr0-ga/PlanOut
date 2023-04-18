const express = require('express');
const router = express.Router();
const tripsCtrl = require('../../controllers/api/trips')


//localhost:/api/trips

router.get('/', tripsCtrl.index)

router.post('/new', tripsCtrl.add)


module.exports = router;