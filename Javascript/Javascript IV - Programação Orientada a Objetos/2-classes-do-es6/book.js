class book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }
  publish() {
    this.published = true;
  }
}
//instasiar ato de criar uma instancia
const eragon = new book("Eragon");
const eldest = new book("Eldest");

eragon.publish();

console.log(eragon);
console.log(eldest);
//confirma se a instacia faz parte do objeto ou nao
console.log([eragon, eldest] instanceof Array);
