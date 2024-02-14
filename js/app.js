// Initialize todo list application
function initTodoList() {
  renderTodos();
  document.getElementById('addTodoBtn').addEventListener('click', createTodo);
  document.getElementById('clearTodoBtn').addEventListener('click', clearTodos);
}

// Fetch and render todos from local storage
function renderTodos() {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  const container = document.getElementById('todo-list-container');
  // Clear existing todos before render
  container.innerHTML = '<h2>My Todo List</h2>';

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
      <span>${todo.text}</span>
      <button onclick="deleteTodo(${index})">Delete</button>
      <button onclick="editTodo(${index}, '${todo.text}')">Edit</button>
    `;
    container.appendChild(todoItem);
  });
}

// Add new todo
function createTodo() {
  const todoInput = document.getElementById('todoInput');
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  
  if (todoInput.value.trim() !== '') {
    todos.push({ text: todoInput.value.trim() });
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
    todoInput.value = ''; // Clear input after adding
  }
}

// Delete a todo item
function deleteTodo(index) {
  let todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.splice(index, 1); // remove todo item at specified index
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

// Edit a todo item
function editTodo(index, oldText) {
  const newText = prompt('Edit your todo:', oldText);
  if (newText !== null && newText.trim() !== '') {
    let todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos[index] = { text: newText.trim() };
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
  }
}

// Clear all todos
function clearTodos() {
  localStorage.clear();
  renderTodos();
}

document.addEventListener('DOMContentLoaded', initTodoList);
