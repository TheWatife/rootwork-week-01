const names = [
  "Boluwatife",
  "Hezekiah",
  "Eniola",
  "Learner",
  "Immanuel",
  "Aisha",
  "Premium",
];
names.push("Lens");
names.unshift("Ego");

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const number = [4, 7, 10, 13, 16, 19, 22];
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    console.log(number[i]);
  }
}
number.pop();
number.shift();
console.log(number);

const score = [18, 89, 57, 30, 69];
let total = 0;
for (let i = 0; i < score.length; i++) {
  total += score[i];
}

const figures = [12, 45, 7, 89, 23, 56];
let largest = figures[0];
for (let i = 0; i < figures.length; i++) {
  if (figures[i] > largest) {
    largest = figures[i];
  }
}

console.log(names[0]);
console.log(names[2]);
console.log(names[names.length - 1]);
console.log(total);
console.log(largest);

// Arrays are useful because they allow you to group values into a variable
// Arrays work well with loops because it allows one perform same operation on each value of the array without repeatedly writing the code
// I wasn't sure if print meant to console.log, so i did it as such.
