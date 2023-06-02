// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let rawdata1 = fs.readFileSync('data1.json')
let rawdata2 = fs.readFileSync('data2.json')
let tasks = JSON.parse(rawdata1)
let check = JSON.parse(rawdata2)

const showtasks = () => {
    for (let i = 0; i < tasks.length; i++) {
        console.log("Nbr" + i + " " + tasks[i] + " status : " + check[i])
    }
}
const addtasks = () => {
    rl.question("What's the name of the new task ?", (name) => {
        tasks.push(name)
        check.push("not yet")
        console.log("task :" + name + " created")
        menu()
    }
    )
}
const deletetasks = () => {
    for (let i = 0; i < tasks.length; i++) {
        console.log("Nbr" + i + " " + tasks[i] + " status : " + check[i])
    }
    rl.question("what is the Nbr of the task do you want to delete ?", (nb) => {
        delete tasks[nb]
        delete check[nb]
        console.log("task :" + nb + " deleted")
        menu()
    }
    )
}
const checktasks = () => {
    for (let i = 0; i < tasks.length; i++) {
        if (check[i] == "not yet") {
            console.log("Nbr" + i + " " + tasks[i])
        }
        continue
    }
    rl.question("what is the Nbr of the task you finished ?", (nb) => {
        check[nb] = "done"
        console.log("task :" + nb + " finished")
        menu()
    }
    )

}

const menu = () => {
 
    tasks = tasks.filter(String)
    check = check.filter(String)
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
                let data1=JSON.stringify(tasks)
                let data2=JSON.stringify(check)
                fs.writeFile('data1.json', data1, err => {
                    if (err) {
                      console.error(err);
                    }
                })
                fs.writeFile('data2.json', data2, err => {
                    if (err) {
                      console.error(err);
                    }
                })
                rl.close()
                break
        }

    })
}
menu()
