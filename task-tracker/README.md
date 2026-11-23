Explain how to open/run the app; how task state is stored and rendered; how event listeners work; how blank input is prevented; one bug you debugged; manual test outcomes for adding, toggling, deleting, filtering, empty input and keyboard flow; AI usage disclosure (including if none used).

The app opens to show an input requesting for a task, after a task is entered, a button "Add Task" is clicked to add the task to the to-do list.
The task is added by clicking the "Add Task" button which has an event listener attached to it detecting for clicks, it then stores all the tasks in an array and also displays it in an unordered list by creating an element and appending it.
Blank inputs are prevented by using the .trim method which clips out whitespace.
A bug i debugged was forgetting to append the child and then using append() instead of appendChild()

AI was used at each step as I pasted my code and it explained and corrected it, for example when displaying an appropriate empty state when the selected filter has no tasks, i made my conditionals inside the tasks forEach which displayed a message after every task, AI later explained to put it in the filterBtn forEach. It also said to use this.target.dataset.filter instead of e.target.dataset.filter but I declined since I'm still grasping the concept.
