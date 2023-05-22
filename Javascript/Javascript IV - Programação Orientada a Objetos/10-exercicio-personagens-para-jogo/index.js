const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const Rodrigo = new Mage("Rodrigo", 90, 4, 2, 14);
const Adriely = new Thief("Adriely", 140, 22, 8);
const Pedro = new Warrior("Pedro", 200, 14, 12, 4);

console.table({ Rodrigo, Adriely, Pedro });

Pedro.switchStance();
Rodrigo.attack(Pedro);
Adriely.attack(Rodrigo);

console.table({ Rodrigo, Adriely, Pedro });

Pedro.switchStance();
Pedro.attack(Rodrigo);
Rodrigo.heal(Rodrigo);
Adriely.attack(Pedro);

console.table({ Rodrigo, Adriely, Pedro });
