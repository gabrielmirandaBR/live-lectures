let estudante = {
  nome: 'Joana',
  idade: 43,
  hardSkills: 3,
  softSkills: 6,
  carreiraSkills: 5
};


// acrescentar chave com valor
estudante.cidade = "Minas Gerais";
estudante["ComidaFavorita"] = 'doritos';
estudante.apelidos = ["miranda", "gabi", "biel"];
estudante.endereco = {
  rua: "Rua Bahia",
  numero: 67
}


// sobrescrever valor da chave
estudante.nome = "Gabriel"
estudante["idade"] = 28;

console.log(estudante);


// exibir informações com for/in
for(let key in estudante) {
  //console.log(key); // mostra somente as chaves
  //console.log(estudante[key]); // valor de cada chave
  console.log(key, estudante[key]); // mostra chave e seus valores;
}


// criar uma função que add e/ou modifica o objeto
function modificaObjeto(parametros) {
  let addParametros = parametros;

  addParametros.hardSkills = 10;
  addParametros.softSkills = 8;
  addParametros.cidade = "Rio de Janeiro";

  return addParametros;
}
console.log(modificaObjeto(estudante));


// exemplo de funções

//soma valores de um array
function somaValores(arrayNumeros) {
  let sum = 0;
  for(let indexArrayNumeros = 0; indexArrayNumeros < arrayNumeros.length; indexArrayNumeros += 1) {
    sum = sum + arrayNumeros[indexArrayNumeros];
  }
  return sum;
}
console.log(somaValores([1,2,3,4,5]));

// retorna o menor indice de um array
function verificaMenorValor (arrayNumeros) {
  let indexMenorNumero = 0;
  for(let indexArrayNumeros in arrayNumeros) {
    if(arrayNumeros[indexArrayNumeros] < arrayNumeros[indexMenorNumero]) {
      indexMenorNumero = indexArrayNumeros;
    }
  }
  return indexMenorNumero;
}
console.log(verificaMenorValor([10, 5, 2, -70, -12020]));
