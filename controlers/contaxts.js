const { Contact } = require('../models/contact');

const { HttpError, ctrlWrapper } = require('../helpers');

const getAll = async (req, res, next) => {
  const result = await Contact.find();
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
  const result = await Contact.create(req.body);

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
