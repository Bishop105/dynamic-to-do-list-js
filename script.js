// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Select the "Add Task" button
    const taskInput = document.getElementById('task-input'); // Select the input field for tasks
    const taskList = document.getElementById('task-list'); // Select the unordered list to display tasks

    // Create the addTask Function
    function addTask() {
        // Inside addTask, retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim(); // Store the trimmed value in taskText

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert the user if it is empty
            return; // Exit the function if the input is empty
        }

        // Task Creation and Removal
        // Create a new li element and set its textContent to taskText
        const li = document.createElement('li'); // Create a new li element
        li.textContent = taskText; // Set the text of the li to the task text

        // Create a new button element for removing the task
        const removeButton = document.createElement('button'); // Create a new button element
        removeButton.textContent = "Remove"; // Set the button text to "Remove"
        removeButton.className = 'remove-btn'; // Assign a class name for styling

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the li element from taskList
        };

        // Append the remove button to the li element
        li.appendChild(removeButton); // Add the remove button to the li
        // Append the li to taskList
        taskList.appendChild(li); // Add the li to the task list

        // Clear the task input field
        taskInput.value = ""; // Set the input field to an empty string
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask); // Add an event listener to the button

    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        // Check if event.key is equal to 'Enter'
        if (event.key === 'Enter') {
            addTask(); // Call addTask if the Enter key is pressed
        }
    });
});
