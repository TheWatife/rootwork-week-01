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

// Collect Users duration
// If User is below 13, return Child
// If User is 13 or older but younger than or is 19, return Teendurationr
// If User is 20 or older but younger than or is 59, return Adult
// If User is 60 or above, return Senior

// let duration = Number(prompt("How old are you?"));
let duration = 60;

function longevity() {
  if (duration < 13) {
    return "Child";
  } else if (duration > 13 && duration <= 19) {
    return "Teenager";
  } else if (duration > 19 && duration <= 59) {
    return "Adult";
  } else {
    return "Senior";
  }
}

// const age = 16;
// const hasLicense = true;
// if (age >= 18) {
//   if (hasLicense) {
//     console.log("Can drive");
//   } else {
//     console.log("No License");
//   }
// } else {
//   console.log("Too young");
// }

// const score = 75;
// if (score >= 80) {
//   console.log("A");
// } else if (score >= 70) {
//   console.log("B");
// } else {
//   console.log("C");
// }

const age = 18;
const score = 92;
const hasLaptop = true;
const hasInternet = true;
const completedApplication = true;

/*PLAIN ENGLISH */
// For an applicant to be eligible for scholarship, the applicant must be 18 years or older, have a score of at least 60, with a complete application.
// The applicant must have access to a laptop and internet.
// If the applicant satisfies all these requirements, he/she is eligible for the scholarship
// If the applicant scores 85 and above, and also satisfies all other requirements, he/she should be given priority.
// If the applicant doesn't satisfy either of the conditions (even if it's just one), he/she is not eligible

/*PSEUDOCODE*/
// Candiddte must be 18 years and above, with a score of at least 60, access to laptop and internt and a complete application
// If applicant has a score of at least 85, candidate must be given priority
// If applicant passes the above, candidate is eligible
// If applicant falls short of one or more, candidate is not eligible

/* JAVASCRIPT */

if (
  age >= 18 &&
  score >= 60 &&
  hasLaptop &&
  hasInternet &&
  completedApplication
) {
  if (score >= 85) {
    console.log("Priority Candidate");
  } else {
    console.log("Eligible");
  }
} else {
  console.log("Not Eligible");
}

// console.log(greeting());
// console.log(largest());
// console.log(parity(72));
// console.log(longevity());
