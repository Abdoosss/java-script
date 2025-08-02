 const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');
        
        // Add task on Enter key press
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTaskFromInput();
            }
        });
        
        // Add task on button click
        addTaskBtn.addEventListener('click', () => {
            addTaskFromInput();
        });
        
        // Function to add task from input
        function addTaskFromInput() {
            const title = taskInput.value.trim();
            if (title) {
                addNewTask(title);
                taskInput.value = '';
            }
        }
        
        // Add new task to the list
        function addNewTask(title) {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.setAttribute('data-status', 'pending');
            
            taskItem.innerHTML = `
                <div class="task-content">
                    <div class="task-title">${title}</div>
                </div>
                <div class="task-actions">
                    <button class="remove-btn" onclick="removeTask(this)">×</button>
                </div>
            `;
            
            taskList.appendChild(taskItem);
        }
        
        // Remove task
        function removeTask(button) {
            const taskItem = button.closest('.task-item');
                taskItem.remove();

        }