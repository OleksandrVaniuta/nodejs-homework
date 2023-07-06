const constacts = require('../models/contacts');
const { HttpError, ctrlWrapper } = require('../helpers');

const getAll = async (req, res, next) => {
  const result = await constacts.listContacts();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await constacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await constacts.addContact(req.body);

  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await constacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'contact deleted' });
};

const ChageById = async (req, res) => {
  const { contactId } = req.params;
  const result = await constacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  ChageById: ctrlWrapper(ChageById),
};
