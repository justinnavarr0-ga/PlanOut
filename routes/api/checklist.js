const express = require('express');
const router = express.Router();
const checklistCtrl = require('../../controllers/api/checklist');


// locaolhost:/api/checklist
router.get('/', checklistCtrl.show)

router.put('/:id/complete', checklistCtrl.update)

router.post('/new', checklistCtrl.add);

router.delete('/:id', checklistCtrl.delete)




module.exports = router;