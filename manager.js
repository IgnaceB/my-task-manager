// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let tasks = ["task1", "task2", "task3"]


const showtasks = () => {
    console.log(tasks)
}

//showtasks()

 console.log("Welcome to your task manager, Press:
1. to see all your tasks
2. to add a task
3. to delete a task
4. to mark a task as done
5. to Exit the task manager")
 rl.question('', (tasks) => {
     console.log('Your age is: ' + age);
     if (age="2"){
        showtasks();
     }
     rl.close();
 });
