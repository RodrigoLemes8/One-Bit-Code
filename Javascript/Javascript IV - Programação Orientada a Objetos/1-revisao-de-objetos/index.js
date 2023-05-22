// const book = {
//   title: "Eragon",
//   pages: 468,
//   published: true,
//   inStock: 20,
//   tags: ["fantasy", "adventure", "medievel"],
//   author: {
//     name: "Christopher Poline",
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
// };

//PascalCase
function book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };
  this.save = function () {
    //salva no banco de dados
  };
}

const author = { nome: "Christopher Poline" };
const tags = ["fantasy", "adventure", "medievel"];
const eragon = new book("Eragon", 468, tags, author);

console.log(eragon);

const eldest = new book("Eldest", 623, tags, author);

console.log(eldest);
