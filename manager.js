// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let tasks = ["task1", "task2", "task3"]
let check=["not yet","not yet","not yet"]

localStorage.setItem('myStorage', JSON.stringify(obj));

const showtasks = () => {
    for (let i=0;i<tasks.length;i++){
        console.log("Nbr"+i+" "+tasks[i]+" status : "+check[i])
    }
}
const addtasks = () => {
    rl.question("What's the name of the new task ?", (name) => {
        tasks.push(name)
        check.push("not yet")
        console.log("task :"+name+" created") 
        menu()
    }
    )
}
const deletetasks=() =>{
    for (let i=0;i<tasks.length;i++){
        console.log("Nbr"+i+" "+tasks[i]+" status : "+check[i])
    }
    rl.question("what is the Nbr of the task do you want to delete ?", (nb) => {
        delete tasks[nb]
        delete check[nb]
        console.log("task :"+nb+" deleted") 
        menu()
    }
    )
}
const checktasks=() =>{ 
    for (let i=0;i<tasks.length;i++){ if (check[i]=="not yet") {

        console.log("Nbr"+i+" "+tasks[i])
    }
        continue
    }
    rl.question("what is the Nbr of the task you finished ?", (nb) => {
        check[nb]="done"
        console.log("task :"+nb+" finished") 
        menu()
    }
    )


}

const menu = () => {
    // fs.readFile('data.json','utf-8', (err,data)=> {

    // }
    // )
    tasks=tasks.filter(String)
    check=check.filter(String)
fs.readFile('welcome.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
})

rl.question('', (option) => {
    switch (option) {
        case "1":
            showtasks()
            menu()
            break

        case "2":
            addtasks()
            break

        case "3":
            deletetasks()
            break

        case "4":
            checktasks()
            break

        case "5":
            rl.close()
            break
    }

})
}
menu()
