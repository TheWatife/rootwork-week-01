const fname = "Boluwatife";
const numbers = [7, 83, 25, 51, 141, 16, 77];

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

function parity(polar) {
  if (polar % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(greeting());
console.log(largest());
console.log(parity(72));
