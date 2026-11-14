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

MILESTONE 1

What the program does:
This program runs a number of functions that logs the tasks, the amount of tasks, completed and pending tasks, uncompleted high-priority tasks, how many tasks in a category and also adds another task to the list of tasks.

How I broke the problem down:
I used for loops to go through each task to find those that meets the conditions listed above.

A few concepts I used are:
i. loop: to iterate through arrays. It was used in every function except the one that added added a new task to the array.
ii. AND comparison operator. It was used to return tasks that were high priority but uncompleted.
iii. push array methods. It was used to add a task to the existing tasks array.

Hardest part:
The hardest part for me was the category summary.

One thing I would improve:
I can't really say.

AI Disclosure:
I used AI to understand the category summary. I accepted the idea of a nested loop.

HTML Practice
This project talks about me. It introduces me with my dislikes and my place of study, it lists the names I like to be called and a few skills I may or may not have. It talks about the projects I've worked on and my education while also providing a form which can me used to contact me.
It also consists of a page that summarizes everything about me.
I used h1 to clearly specify what the project is about, that way, at first glance, an idea is had.
I also used div to group the projects I listed out
And br tags to create breaks in my explanations and increase white space.
No AI was used in this project.

Week 6 Learning Check

1. When would you choose Flexbox instead of Grid?
   Ans: I will use flexbox instead of grid when I want the items in a container to go in a single direction i.e one-dimensional.

2. What does box-sizing: border-box change?
   Ans: box-sizing:border-box keeps the width of a box constant no matter the left/right padding added to it, i.e it shrinks the text size to accommodate the padding.

3. What is the difference between margin and padding?
   Ans: Margin is the space between the border and the outside content (what is outside the border) while padding is the space between the border and in inner content (what the border encloses)

4. What does a media query do?
   Ans: Media query allows for a different set for stylings at a particular width.

5. Why is max-width: 100% useful for images?
   Ans: It allows images to shrink to fit smaller containers.

6. Mention one CSS behaviour from the videos that initially
   confused you and explain how you understand it now?
   Ans: box-sizing: border-box was foreign to me and after trying it out, it was still strange, but I checked online and I now understand that it maintains the width of of the container.

Decision Designs
I made the nav bar a flex box so I could align them every which way.
I made the aside element have a red text so it won't be easily overlooked.
I made the submit button's background white so it doesn't static and unresponsive to users (Improve users experience)

Flexbox vs Grid
I used flex in my nav as i wanted it in one direction while I used grid in my overall layout (main) as I wanted a 2-dimensional layout where my form could be by the side

Responsive behaviour
In desktop, the form is to the right (using grid) but is at the bottom of the page in mobile.

Hardest CSS problem
The hardest CSS problem for me happened when I was scaling down to tablet mode as I wanted the third project i had to span the entire width of the other two. I didn't use flexbox as they shared the same class name. It made me learn about the nth child.

AI Disclosure
I used AI when scaling to tablet, I used it to find out how my third item in a flexbox could span the entire width of the other two. I accepted the use of nth-child and also calc()
