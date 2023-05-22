const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Juno");

console.log({ towns, townsCopy });

const townsClone = [...towns];
const newArray = [...towns, "Jardimcatarina"];
townsClone.push("Aldebaran");
console.log(newArray);

console.log({ towns, townsCopy, townsClone });

const townsObj = { ...towns };
const townsObjClone = { ...towns };

townsObjClone.test = "Test";

console.log({ townsObj, townsObjClone });
