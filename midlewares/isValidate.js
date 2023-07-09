const { isValidObjectId } = require('mongoose');
const { HttpError } = require('../helpers');

const isValideId = (req, res, next) => {
  const { Id } = req.params;
  if (isValidObjectId(Id)) {
    next(HttpError(400, `${Id} is not valid id`));
  }
  next();
};

module.exports = isValideId;
