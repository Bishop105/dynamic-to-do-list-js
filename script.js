document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements: Add Task button, task input, and task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get task text and trim whitespace
        const taskText = taskInput.value.trim();

        // Alert user if task input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button for this task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Setup click event to remove the task from the list
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to the list item
        li.appendChild(removeBtn);

        // Append list item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Event listener for clicking "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener to add task when pressing Enter key inside input
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
