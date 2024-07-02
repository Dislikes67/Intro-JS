
// Ajout d'un écouteur d'evenements sur le bouton pour appeler une fonction ajout 
const addBtn = document.querySelector('#btn'); 
addBtn.addEventListener('click', addTask); // Ajoute task on click

// On crée la fonction d'ajout
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

function addTask() {
    const newTask = taskCard.cloneNode(true) // Clone l'élément (card)
    const newTextArea = newTask.querySelector('.task')  // Definir la valeur de la zone de texte pour qu'elle ne reste pas vide

    newTextArea.value = "New Task"; // Definir la valeur de la zone de texte pour qu'elle ne reste pas vide

    tasksContainer.appendChild(newTask) // On ajoute cette nouvelle card dans le DOM pour l'afficher
}

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function(){ // delete default task on click
    deleteTask(taskCard); // target the right task
  });

function  deleteTask(task){
    task.remove();  // remove the task
}

function addTask(){
    const newTask = taskCard.cloneNode(true) // clone the task card
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')

    newTextArea.value = "New Task" // set new task text to "New Task"
    newDelBtn.addEventListener('click', function() { // add delete event listener to new task
        deleteTask(newTask); // Target the new task
    });

    taskContainer.appendChild(newTask) // append new task to the tasks container
    updateCount();
} 