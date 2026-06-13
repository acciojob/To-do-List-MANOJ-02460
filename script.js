// your code here
const inputElement = document.getElementById('newTodoInput');
const buttonElement = document.getElementById('addTodoBtn');
const todoHeading = document.getElementById('todoList');


buttonElement.addEventListener("click",function(){
	const task = inputElement.value;

	if(task === "") return;
	const listItem = document.createElement('li');
	listItem.textContent=task



todoHeading.appendChild(listItem);
inputElement.value="";
})











