const person = {
  name: "Rodrigo",
  job: "Dev",
  parents: ["Rodrigo", "Patricia"],
};

const name = person.name;

const { job, parents } = person;

console.log(name, job, parents);

const [father, mother] = parents;

console.log(father, mother);

function createUser(person) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name: person.name,
    job: person.job,
    parents: person.parents,
  };
}

const luke = createUser(person);

console.log(luke);

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}

const luke1 = createUser(person);

console.log(luke1);
