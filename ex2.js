var pessoas = [
  {nome:'Jorge',idade: 25,salario: 2000},
  {nome:'André',idade: 55,salario: 6200},
  {nome:'Marcos',idade: 19,salario: 1500},
  {nome:'Adalberto',idade: 35,salario: 3200},
  {nome:'Carlos',idade: 37,salario: 1900},

]


const filter = pessoas.filter((item) => item.idade >= 35);

console.log(filter);

const sum = pessoas.reduce((total, next) => total + next.salario, 0);

console.log(sum);

const find = pessoas.find((item) => item.nome === 'José');

console.log(find);

const nome = pessoas.filter((item) => item.nome.charAt(0) == 'A');

console.log(nome);
