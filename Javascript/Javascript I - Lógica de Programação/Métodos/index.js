//Métodos são funções atreladas a objetos!
let pessoa = {
  nome: "Rodrigo",
  idade: 24,
  dizerOla() {
    console.log("Ola mundo! Meu nome é " + this.nome);
  },
};

console.log(pessoa);

pessoa.dizerOla();
