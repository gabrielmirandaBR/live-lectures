const Clients = require('../services/clientsService');

async function getAll(_req, res) {
  const clients = await Clients.getAll();

  if (!clients) {
    return res.status(404).json({ message: 'Not Found!' });
  }

  return res.status(200).json(clients);
}

async function addClient(req, res) {
  const { name } = req.body;
  const client = await Clients.addClient(name);

  if (!client) {
    return res.status(400).json({ message: 'data invalid' });
  }

  return res.status(200).json(client);
}

module.exports = {
  getAll,
  addClient,
};