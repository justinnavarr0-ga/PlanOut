const express = require('express');
const router = express.Router();
const checklistCtrl = require('../../controllers/api/checklist');


// locaolhost:/api/checklist
router.get('/', checklistCtrl.show)
// POST /api/notes
router.post('/new', checklistCtrl.add);

router.delete('/:id', checklistCtrl.delete)

module.exports = router;