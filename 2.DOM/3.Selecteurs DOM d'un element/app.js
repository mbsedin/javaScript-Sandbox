// METHODE 1:  .getElementById()
// console.log(document.getElementById('task-title'));

// // Obtenez des choses de l'élément
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Changer de style
// taskTitle.style.backgroundColor = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Modifier le contenu
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>'; inserer un html

//METHODE 2 document.querySelector()**BEST**
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-evenchild()").style.background = "#f4f4f4";