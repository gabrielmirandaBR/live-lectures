const Clients = require('../models/clientsModel');

async function isValidName(name) {
  if (!name || name.length < 3) return false;
}

async function getAll() {
  return Clients.getAll();
}

async function addClient(name) {
  const isValide = isValidName(name);

  if (!isValide) return false;

  const client = await Clients.addClient(name);

  return client;
}

module.exports = {
  getAll,
  addClient,
};