const setup = () => {
    document.querySelector(".plusDiv").addEventListener("click", openForm);
    retrieveTasks();

    document.getElementById('wisAlleTaken').addEventListener('click',clear);
}

const clear = () => {
  localStorage.clear();
  retrieveTasks();
}

const openForm = () => {
    if (document.querySelector("form") === null) {
        const addDiv = document.querySelector(".taskContainer > div");
        addDiv.classList.add("noPlusDiv");

        const form = document.createElement("form");
        form.setAttribute("method", "get");
        addDiv.appendChild(form);

        const createInput = (type, id, label, placeholder) => {
            const labelElement = document.createElement("label");
            labelElement.setAttribute("for", id);
            labelElement.textContent = label;
            form.appendChild(labelElement);

            const inputElement = document.createElement("input");
            inputElement.setAttribute("type", type);
            inputElement.setAttribute("id", id);
            if (placeholder) {
                inputElement.setAttribute("placeholder", placeholder);
            }
            form.appendChild(inputElement);

            return inputElement;
        };

        createInput("text", "txtTask", "Task:");
        createInput("date", "dateTask", "Date:");
        createInput("textarea", "txtDescription", "Description:");

        const saveButton = document.createElement("button");
        saveButton.setAttribute("class", "button");
        saveButton.textContent = "Save";
        addDiv.appendChild(saveButton);

        saveButton.addEventListener("click", saveTask);
    }
}

const saveTask = (event) => {
    event.stopPropagation();

    const taskName = document.querySelector("#txtTask").value;
    const taskDate = document.querySelector("#dateTask").value;
    const taskDescription = document.querySelector("#txtDescription").value;


    const task = {
        name: taskName,
        date: taskDate,
        description: taskDescription
    };

    const existingTasks = localStorage.getItem('tasks');
    let tasks = existingTasks ? JSON.parse(existingTasks) : [];


    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    closeForm();
}

const closeForm = () => {
    const addDiv = document.querySelector(".taskContainer > div");
    addDiv.classList.remove("noPlusDiv");
    const form = document.querySelector("form");
    form.remove();

    const saveButton = document.querySelector(".button");
    saveButton.remove();

    retrieveTasks();
}

const retrieveTasks = () => {
    const existingTasks = localStorage.getItem('tasks');
    const taskContainer = document.querySelector(".taskContainer");

    const taskDivs = taskContainer.querySelectorAll(".task");
    taskDivs.forEach(taskDiv => taskDiv.remove());

    if (existingTasks) {
        const tasks = JSON.parse(existingTasks);

        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];

            const taskDiv = document.createElement("div");
            taskDiv.classList.add('task');
            const taskName = document.createElement("h3");
            taskName.textContent = task.name;
            const taskDate = document.createElement("p");
            taskDate.textContent = "Date: " + task.date;
            const taskDescription = document.createElement("p");
            taskDescription.textContent = "Description: " + task.description;

            const doneButton = document.createElement("button");
            doneButton.textContent = "Done";
            doneButton.addEventListener("click", () => {
                taskDiv.style.backgroundColor = "green";
            });


            taskDiv.appendChild(taskName);
            taskDiv.appendChild(taskDate);
            taskDiv.appendChild(taskDescription);
            taskDiv.appendChild(doneButton);

            taskContainer.appendChild(taskDiv);
        }
    }
}


window.addEventListener("load", setup);
