const people = [
  { name: "John Doe", age: 16 },
  { name: "Thomas Calls", age: 19 },
  { name: "Liam Smith", age: 20 },
  { name: "Jessy Pinkman", age: 18 },
];
const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];
const ageAbove18 = (person) => {
  if (person.age > 18) {
    return true;
  }
};
const addCoffeeLoverProperty = (person) => {
  for (let i = 0; i < coffeeLovers.length; i++) {
    const clover = coffeeLovers[i];
    if (person.name == clover) {
      person.coffeeLover = true;
      return person;
    } else {
      person.coffeeLover = false;
    }
  }
  return person;
};
const ageReducer = (accumulator, next) => {
  if (next.coffeeLover) {
    return accumulator + next.age;
  }
  return accumulator;
};

const coffeeLoversAbove18 = people
  .filter(ageAbove18)
  .map(addCoffeeLoverProperty);

const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18.reduce(ageReducer, 0);

console.log(totalAgeOfCoffeeLoversAbove18);
