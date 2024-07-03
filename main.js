
// Ajout d'un écouteur d'événements sur le bouton pour appeler une fonction ajout
const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask); // Ajoute une tâche au clic

const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

function addTask(){
    const newTask = taskCard.cloneNode(true); // Clone l'élément (card)
    const newDelBtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector('.task'); // Définir la valeur de la zone de texte pour qu'elle ne reste pas vide

    newTextArea.value = "New Task"; // Définir la valeur de la zone de texte pour qu'elle ne reste pas vide

    tasksContainer.appendChild(newTask); // On ajoute cette nouvelle carte dans le DOM pour l'afficher
    newDelBtn.addEventListener('click', function(){ // Ajoute un écouteur d'événements pour supprimer la nouvelle tâche
        deleteTask(newTask); // Cible la nouvelle tâche
        updateTaskCount();
    });

    updateTaskCount();
}

// Ajout de l'écouteur d'événements pour le bouton de suppression par défaut
const delBtn = taskCard.querySelector('.delBtn');
delBtn.addEventListener('click', function() { // Supprime la tâche par défaut au clic
    deleteTask(taskCard); // Cible la bonne tâche
    updateTaskCount();
});

function deleteTask(task) {
    task.remove(); // Supprime la tâche
}

// Fonction pour mettre à jour le compte de tâches
function updateTaskCount(){
    const count = tasksContainer.children.length;
    document.getElementById('count').textContent = `Number of tasks: ${count}`;
}

// Initialiser le compteur de tâches
updateTaskCount();