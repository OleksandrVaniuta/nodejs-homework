const express = require('express');
const ctrl = require('../../controlers/auth');

const validateBody = require('../../midlewares/validates');
const { authenticate } = require('../../midlewares');
const { schemas } = require('../../models/user');

const router = express.Router();

router.post(
  '/register',
  validateBody(schemas.registrationSchema),
  ctrl.register
);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch(
  '/users',
  validateBody(schemas.subscriptionSchema),
  authenticate,
  ctrl.ChageSubscription
);

module.exports = router;
