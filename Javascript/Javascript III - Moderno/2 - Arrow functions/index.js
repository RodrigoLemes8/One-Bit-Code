function normalSum(a, b) {
  return a + b;
}

console.log(`Soma Normal: ${normalSum(2, 2)}`);

const anonymousSum = function (a, b) {
  return a + b;
};

console.log(`Soma Anonima: ${anonymousSum(2, 2)}`);

const arrowSum = (a, b) => {
  return a + b;
};

console.log(`Soma arrow function: ${arrowSum(2, 2)}`);

const subract = (a, b) => a - b;

console.log(`Subtração arrow function: ${subract(10, 6)}`);

const double = (n) => `O dobro de ${n} é ${n * 2}`;

const number = 32;
console.log(`Dobro: ${double(number)}`);

const metade = (m) => `A metade de ${m} é ${m / 2} `;
console.log(`Metade: ${metade(number)}`);

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];
const startingWithP = towns.filter((town) => town[0] === "P");
console.log(startingWithP);
