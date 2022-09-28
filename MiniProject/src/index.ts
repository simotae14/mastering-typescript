interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;
// Read from localStorage
function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

const todos: Todo[] = readTodos();
todos.forEach(createTodo)

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false
  };
  createTodo(newTodo);
  todos.push(newTodo);
  // Save in the localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = ""; 
}

function createTodo(todo: Todo) {
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
  
}

form.addEventListener("submit", handleSubmit);