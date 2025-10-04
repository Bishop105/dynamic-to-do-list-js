document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        // Get the input value and trim whitespace
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return; // Exit the function
        }

        // Create a new list item (li) element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button for the task
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // When remove button is clicked, remove the li from the list
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the li
        li.appendChild(removeBtn);

        // Append li to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener("click", addTask);

    // Event listener for pressing Enter in the input field
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Invoke addTask once DOM is loaded (per instructions, though it won’t add a task unless input is filled)
    addTask();
});
