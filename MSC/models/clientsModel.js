const connection = require('./connection');
const mongoConnection = require('./connection');

async function getAll() {
  return mongoConnection()
    .then((db) => db.collection('clients').find().toArray());
}

async function addClient(name) {
  return connection()
    .then((db) => db.collection('clients').insertOne({ name }));
}

module.exports = {
  getAll,
  addClient,
};