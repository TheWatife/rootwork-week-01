const fname = "Boluwatife";
const numbers = [7, 83, 25, 51, 77];

function greeting() {
  return `Hello Rootwork. I'm ${fname}, one of the founding cohort.`;
}
function largest() {
  let biggest = numbers[0];
  for (let number of numbers) {
    if (number > biggest) {
      biggest = number;
    }
  }
  return biggest;
}

console.log(greeting());
console.log(largest());
