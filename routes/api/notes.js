const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
// locaolhost:/api/notes
router.post('/notes', notesCtrl.show)
// POST /api/notes
router.post('/notes', notesCtrl.add);

module.exports = router;