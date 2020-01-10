//UI Variables
//Grabs the form element using its id(task from) and assigns it to form
const form = document.querySelector("#task-form");
//Grabs the list of tasks element by using the collection class, assigns to taslk list
const taskList = document.querySelector(
	".collection"
); /** These  are in some way the same as above 
just grabbing different parts of the ui using the queryslector and assigning them to variables so their
easier to manipulate, saves us having to find them each time we want to do something with them */
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();

function loadEventListeners() {
	//add listner for submit, then addTask to tasklist
	form.addEventListener("submit", addTask);
	//add listner for click on tasklist, then remove the clicked task
	taskList.addEventListener("click", removeTask);

	clearBtn.addEventListener("click", cleartasks);
}

function addTask(e) {
	//make sure they arnt trying to submit an empty value for task
	if (taskInput.value === "") {
		alert("You must add a Task");
	}
	//Create a list item
	const li = document.createElement("li");
	//Give the newly created list item a class of collection item
	li.className = "collection-item";
	//create a text node with the value that is input by the user
	//then append that text node to the list item we just created
	li.appendChild(document.createTextNode(taskInput.value));
	//create a link (a tag)
	const link = document.createElement("a");
	//give it a classname of
	link.className = "delete-item secondary-content";
	//insert html for font awesome icon into the link
	link.innerHTML = '<i class= "fa fa-remove"></i>';
	//append the link (which now contains the a tag AND the icon) to the list item
	li.appendChild(link);

	//append the newly created list item to the task list
	//which now contains the link which contains the a tag which contains the icon
	taskList.appendChild(li);

	//set the input to clear again so the values are no longer in the input
	taskInput.value = "";
	//stop the page from submitting to nowhere
	e.preventDefault();
}

//delete task from task list
function removeTask(e) {
	//if the parent element of the clicked element has the class delete item, ask to confirm
	if (e.target.parentElement.classList.contains("delete-item")) {
		if (confirm("Are you sure you wanrt to delete this task?")) {
			//If yes, then go to the list item level and remove it
			//icon < a tag < li <tasklist, icon is being clicked
			e.target.parentElement.parentElement.remove();
		}
	}
}

function cleartasks() {
	taskList.innerHTML = "";
}
