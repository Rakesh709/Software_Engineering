const fs = require('fs')

const filepath = "./tasks.json";

//check doc why 2 
//0     1            2    3
//node /todo/todo.js add "buy milk"
const command = process.argv[2]
const argument = process.argv[3]

const loadTasks = ()=>{
    try {
        const dataBuffer= fs.readFileSync(filepath);
        const dataJSON= dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks)=>{
    const dataJSON=JSON.stringify(tasks)
    fs.writeFileSync(filepath,dataJSON)
}

const addTask= (task)=>{
    const tasks = loadTasks();
    tasks.push({task})
    saveTasks(tasks)
    console.log("Task added", task);
}

const listTask = ()=>{
    const tasks = loadTasks();
    tasks.forEach((task,index) => {
        console.log(`${index+1} = ${task.task}`);
        
    });
}

//interfaces 
if(command==='add'){
    addTask(argument)
}else if(command === 'list'){
    listTask()
}else if(command === 'remove'){
    removeTask(parseInt(arguemnt))
}else{
    console.log("Command not found !");
    
}