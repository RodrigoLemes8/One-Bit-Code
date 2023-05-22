/*if (6 === 6) {
  console.log("verdade");
} else {
  console.log("falso");
}

if (6 !== 6) {
  console.log("verdade");
} else {
  console.log("falso");
}
*/
const idade = prompt("Iforme a sua idade: ");

if (idade > 18) {
  alert("Você é maior de iade");
} else if (idade > 12) {
  alert("Você é menor de idade");
} else if (idade > 4) {
  alert("Você é criança");
}

const resultado = 6 === 6 ? "Verdadeiro" : "falso";

console.log(resultado);
