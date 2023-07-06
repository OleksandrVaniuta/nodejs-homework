const express = require('express');

const router = express.Router();

const ctrl = require('../../controlers/contaxts');

const validateBody = require('../../midlewares/validates');
const schema = require('../../schema/contacts');

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', validateBody(schema.addSchema), ctrl.add);

router.delete('/:contactId', ctrl.deleteById);

router.put('/:contactId', validateBody(schema.addSchema), ctrl.ChageById);

module.exports = router;
