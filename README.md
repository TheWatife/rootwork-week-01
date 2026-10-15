I'm Boluwatife.
I don't know a lot about programming level, just the basics.
I'm interested in Frontend and Mobile Development.
At the end of Rootwork's six month, I want to be able to create functional websites and mobile apps with nice animations, with as little help as possible.

My index.js file greets the user with the name stored in the fname variable. It also checks for the largest number by iterating through the array in the "numbers" variable and returns it.

parity function was added to check if a number given is even or odd.

longevity function was added to check the status of the User's age.

Assignment 03

Applicant 1
age = 16, score = 60, hasLaptop = true, hasInternet = true, completedApplication = true
Expected Result: Not Eligible
Actual Result: Not Eligible

Applicant 2
age = 18, score = 47, hasLaptop = true, hasInternet = true, completedApplication = true
Expected Result: Not Eligible
Actual Result: Not Eligible

Applicant 3
age = 28, score = 60, hasLaptop = true, hasInternet = false, completedApplication = true
Expected Result: Not Eligible
Actual Result: Not Eligible

Applicant 4
age = 22, score = 77, hasLaptop = true, hasInternet = true, completedApplication = false
Expected Result: Not Eligible
Actual Result: Not Eligible

Applicant 5
age = 26, score = 60, hasLaptop = false, hasInternet = true, completedApplication = true
Expected Result: Not Eligible
Actual Result: Not Eligible

Applicant 6
age = 18, score = 70, hasLaptop = true, hasInternet = true, completedApplication = true
Expected Result: Eligible
Actual Result: Eligible

Applicant 7
age = 20, score = 60 hasLaptop, = true hasInternet = true, completedApplication = true
Expected Result: Eligible
Actual Result: Eligible

Applicant 8
age = 27, score = 92, hasLaptop, = true, hasInternet = true, completedApplication = true
Expected Result: Priority candidate
Actual Result: Priority candidate

Part 5

1. age represents the age of the applicant, score represents the applicant's score, hasInternet and hasLaptop conveys if the applicant has access to internet and a laptop, and completedApplication shows if the applicant has completed his/her application.
2. If applicant's age is 18 and above, and has a score of at least 60, has access to laptop and internet and has also completed the application then he/she is Eligible.
   If applicant has a score of 85 and above, he/she is given Priority.
   If applicant doesn't meet these conditions, he/she is not eligible for admission.
3. The logical operator I used is &&.
4. The order of my conditions matter because it'll be interpreted according to hierachy. In my case, all other requirements had to be satisfied before candidates with higher scores of 85 and above can then be picked out.
5. An applicant with a high score can still fail if he/she doesn't satisfy other requirements.
6. The difference between && and || id that the former returns true only and only if all (left and right hand side) the conditions are true while the later returns true if at least one condition is true.
7. I didn't come across any bug/mistake.
