const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskContent = taskInput.value.trim();
  if (taskContent !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskContent;
    taskItem.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
    });
    taskList.appendChild(taskItem);
    taskInput.value = '';
  } else {
    alert('Por favor, ingresa una tarea válida.');
  }
});
