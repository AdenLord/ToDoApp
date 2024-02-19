//--selector-----------------------------------------------
const inputText = document.getElementById('inputText');
const addTask = document.getElementById('addTask');
const removeTaskBtn = document.getElementById('remove-btn');
const taskBox = document.getElementById('taskBox');

//--event------------------------------------------------------
function EventListeners(){
    addTask.addEventListener('click', creatTask);
    removeTaskBtn.addEventListener('click', removeTask);
}

EventListeners();

//--creat task--------------------------------------------------
function creatNewTask(){
    const newTsak = document.createElement('div');
    newTsak.classList.add('task');
    const para = document.createElement('p');
    para.innerText = inputText.value;
    newTsak.appendChild(para);
    

    const deleteTask = document.createElement('button');
    deleteTask.innerHTML = "delete"
    deleteTask.classList.add('smBtn');
    deleteTask.classList.add('smBtnD');

    const doneTask = document.createElement('button');
    doneTask.innerHTML = "done"
    doneTask.classList.add('smBtn');
    doneTask.classList.add('smBtnFin');

    newTsak.appendChild(deleteTask);
    newTsak.appendChild(doneTask);

    taskBox.appendChild(newTsak);

    const selectTask = document.querySelectorAll('.task');
    for(let i = 0; i < selectTask.length ; i++){
        selectTask[i].addEventListener('click', selectThisTask);
    }

    const deleteTasks = document.querySelectorAll('.smBtnD');
    for(let i = 0; i < deleteTasks.length; i++){
        deleteTasks[i].addEventListener( 'click', deleteThisTask);
    }

    const doneTasks = document.querySelectorAll('.smBtnFin');
    for(let i = 0; i < doneTasks.length; i++){
        doneTasks[i].addEventListener('click', finThisTask);
    }
}

function creatTask(){
    if( inputText.value == ''){
        alert('cant be empty');
    } else {
        creatNewTask();
        inputText.value = "";
    }  
}

//--remove task --------------------------------------------------------
function removeTask(){
    const selectTask = document.querySelectorAll('#taskBox > div.task');

    for(let i= 0; i < selectTask.length; i++){
        if( selectTask[i].attributes.selected ){
            selectTask[i].remove();
        }
    }
}

// delete task------------------------------------------------------------
function deleteThisTask(e){
    e.stopPropagation()
    this.parentNode.remove();
}


// finish task------------------------------------------------------------
function finThisTask(e){
    e.stopPropagation()
    this.classList.toggle('finished');
}

//--select--------------------------------------------------------
function selectThisTask(){
    this.classList.toggle('select');
    this.toggleAttribute("selected");
}