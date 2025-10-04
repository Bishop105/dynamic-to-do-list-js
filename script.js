document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // List to display tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Prompt user if input is empty
            return; // Exit the function if the input is empty
        }

        // Task Creation
        const li = document.createElement('li'); // Create a new li element
        li.textContent = taskText; // Set the text of the li to the task text

        // Create a remove button
        const removeButton = document.createElement('button'); // Create a new button element
        removeButton.textContent = "Remove"; // Set the button text
        removeButton.className = 'remove-btn'; // Assign a class name for styling

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the li element from taskList
        };

        // Append the remove button to the li element
        li.appendChild(removeButton); // Add the remove button to the li
        taskList.appendChild(li); // Append the li to the task list

        // Clear the task input field
        taskInput.value = ""; // Reset the input field to an empty string
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask); // Call addTask when the button is clicked

    // Allow tasks to be added by pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Check if the Enter key was pressed
            addTask(); // Call addTask if Enter is pressed
        }
    });
});
