const express = require('express');
const router = express.Router();
const checklistCtrl = require('../../controllers/api/checklist');

router.put('/:id/complete', checklistCtrl.update)
// locaolhost:/api/checklist
router.get('/', checklistCtrl.show)

router.post('/new', checklistCtrl.add);

router.delete('/:id', checklistCtrl.delete)



module.exports = router;