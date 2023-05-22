const Address = require("./address");
const person = require("./person");

const addr = new Address("7 de Setembro", 92, "Centro", "São Fidélis", "RJ");
const rodrigo = new person("Rodrigo Lemes", addr);

console.log(rodrigo);
console.log(rodrigo.address.fullAddress());
