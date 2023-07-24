const express = require('express');

const router = express.Router();

const ctrl = require('../../controlers/contaxts');
const validateBody = require('../../midlewares/validates');
const isValideId = require('../../midlewares/isValidate');
const { authenticate } = require('../../midlewares');

const { schemas } = require('../../models/contact');

router.get('/', authenticate, ctrl.getAll);

router.get('/:Id', authenticate, isValideId, ctrl.getById);

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete('/:Id', authenticate, isValideId, ctrl.deleteById);

router.put(
  '/:Id',
  validateBody(schemas.addSchema),
  isValideId,
  authenticate,
  ctrl.ChageFavorite
);

router.patch(
  '/:Id/favorite',
  validateBody(schemas.updateFavoriteSchema),
  isValideId,
  authenticate,
  ctrl.ChageFavorite
);

module.exports = router;
