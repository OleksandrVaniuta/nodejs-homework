const express = require('express');

const router = express.Router();

const ctrl = require('../../controlers/contaxts');

// const { validateBody, isValideId } = require('../../midlewares/validates');
const validateBody = require('../../midlewares/validates');
const isValideId = require('../../midlewares/isValidate');

const { schemas } = require('../../models/contact');

router.get('/', ctrl.getAll);

router.get('/:Id', isValideId, ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.delete('/:Id', isValideId, ctrl.deleteById);

router.put(
  '/:Id',
  validateBody(schemas.addSchema),
  isValideId,
  ctrl.ChageFavorite
);

router.patch(
  '/:Id/favorite',
  validateBody(schemas.updateFavoriteSchema),
  isValideId,
  ctrl.ChageFavorite
);

module.exports = router;
