const express = require('express');

const Clients = require('../controllers/ClientsController');

const router = express.Router();

// Listando todas as pessoas
router.get('/', Clients.getAll);

// Cadastrando nova pessoa
router.post('/', Clients.addClient);

module.exports = router;
