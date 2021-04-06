const cities = [
  { state: 'AM', name: 'Manaus', region: 'N'},
  { state: 'PA', name: 'Belém', region: 'N'},
  { state: 'TO', name: 'Porto Nacional', region: 'N'},
  { state: 'MG', name: 'Nepomuceno', region: 'SE'},
  { state: 'BA', name: 'Cachoeira', region: 'NE'},
  { state: 'PR', name: 'Curitiba', region: 'S'},
  { state: 'SP', name: 'Hortolândia', region: 'SE'},
  { state: 'RN', name: 'Touros', region: 'NE'},
  { state: 'CE', name: 'Jericoacoara', region: 'NE'},
  { state: 'TO', name: 'Três Pedras', region: 'N'},
  { state: 'MG', name: 'João Pinheiro', region: 'SE'}
];


// 1. Encontre todas as cidades da região Nordeste (NE)
console.log('As cidades que ficam na região Nordeste são: ');

const citiesNe = cities.filter(city => city.region === 'NE');

console.log(citiesNe);

console.log('-------------------------------------------------------------');


// 2. Encontre todas as cidades do estado de Tocantins (TO)
console.log('As cidades do estado de Tocantins são: ');

const citiesTO = cities.filter(city => city.state === 'TO');

console.log(citiesTO);


// 3. Encontre todas as cidades que começam com a letra C
console.log('As cidades que começam com a letra C são: ');

const citiesC = cities.filter ((city) => city.name.startsWith('C'));

console.log(citiesC);


// EXEMPLO DE FILTRAR UM ARRAY SEM A FUNÇÃO FILTER
const numbers = [1, 2, 3, 4];

const filter = (array, callback) => {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index])) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

console.log(filter(numbers, (number) => number <= 2));
