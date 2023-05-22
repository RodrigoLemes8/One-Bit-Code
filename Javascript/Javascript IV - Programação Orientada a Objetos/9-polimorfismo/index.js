class Vehicle {
  move() {
    console.log("O veículo está se movendo.");
  }
}

class car extends Vehicle {
  move() {
    console.log("O carro está se movendo.");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio esta navegando.");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A areonave está voando a ${speed} km/h`);
  }
}

const delorean = new car();
const blackPearl = new Ship();
const epoch = new Aircraft();

// delorean.move();
// blackPearl.move();
// epoch.move(80);

function start(vehicle) {
  console.log("Iniciando um veículo...");
  vehicle.move(); // pode ser qualquer subclass de Vehicle
}

start(delorean);
start(blackPearl);
start(epoch);
