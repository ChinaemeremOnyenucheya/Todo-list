
// Linking elements
let taskInput = document.getElementById("input");

let timeInput = document.getElementById("time");

let addTaskButton = document.getElementById("buttonAdd");

let taskList = document.querySelector(".task-list");

let extractButton = document.querySelectorAll(".extractButton");

let taskCompleted = document.querySelector(".list-completed");

let displayContainer = document.querySelector(".container-incomplete");


// Adding eventListener to the addtask button
addTaskButton.addEventListener("click",() =>{
	if(taskInput.value.length < 3 || timeInput.value.length < 5){ alert("Enter valid details");}

	else{
	let newListElement = document.createElement("li");
	newListElement.innerHTML = `<p class ="extractTask"> ${taskInput.value} at &nbsp; ${timeInput.value}</p> <button class="extractButton"> Completed </button>`;
	taskList.insertBefore(newListElement, taskList.childNodes[0]);
	taskInput.value = "";
	timeInput.value = "";
	displayContainer.style.display ="";}	
})

// Adding eventListener to the completed button under incomplete task
document.body.addEventListener("click",(e) =>{
		if(e.target.getAttribute("class") === "extractButton"){
	           let listElement = document.createElement("li");
	           let lastPara = document.createElement("p");
	           let buttonDel = document.createElement("button");
	           listElement.setAttribute("class","completedListTask");
	           buttonDel.setAttribute("class","delete");
	           lastPara.textContent = e.target.previousElementSibling.textContent;          
	           buttonDel.textContent = "Delete";
	           listElement.appendChild(lastPara);
	           listElement.appendChild(buttonDel);
	           taskCompleted.insertBefore(listElement, taskCompleted.childNodes[0]);
	           e.target.parentNode.remove();
	       };

	     })

// Adding eventListener to the delete button in completed task section
document.body.addEventListener("click",(e) =>{
	if(e.target.getAttribute("class") === "delete"){
		e.target.parentNode.remove();	
	}
		
})



