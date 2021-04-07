const assert = require('assert');

const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away...'];

// Concatenando os itens do array

const epicPhrase = epic.reduce((acumulator, currentValue) => { 
  return `${acumulator} ${currentValue}`;
});


//Teste

const expectedValue = 'A long time ago, in a galaxy far far away...';

assert.strictEqual(epicPhrase, expectedValue);