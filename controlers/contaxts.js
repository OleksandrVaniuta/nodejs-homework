const { Contact } = require('../models/contact');

const { HttpError, ctrlWrapper } = require('../helpers');

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = '' } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, '', {
    skip,
    limit,
    favorite,
  }).populate('owner', 'email subscription');
  console.log(req.params);
  res.json(result);
};

const getById = async (req, res, next) => {
  const { Id } = req.params;
  const result = await Contact.findById(Id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });

  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { Id } = req.params;
  const result = await Contact.findOneAndRemove(Id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'contact deleted' });
};

const ChageById = async (req, res) => {
  const { Id } = req.params;
  const result = await Contact.findByIdAndUpdate(Id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const ChageFavorite = async (req, res) => {
  const { Id } = req.params;
  const result = await Contact.findByIdAndUpdate(Id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'missing field favorite');
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  ChageById: ctrlWrapper(ChageById),
  ChageFavorite: ctrlWrapper(ChageFavorite),
};
