const inputValue = document.querySelector("#item");
const itemAdd = document.querySelector("#items");
const addBtn = document.querySelector("#btn");
const STORAGE_KEY = "todoItems";

let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const saveTodos = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const createTodoElement = (text, index) => {
  const itemText = document.createElement("span");
  itemText.textContent = text;
  itemText.style.flex = "1";
  itemText.style.marginRight = "1rem";
  itemText.style.alignSelf = "center";

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.textContent = "Edit";
  editBtn.style.padding = "8px 12px";
  editBtn.style.backgroundColor = "red";
  editBtn.style.color = "#fff";
  editBtn.style.minWidth = "70px";
  editBtn.style.border = "none";

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";
  deleteBtn.style.padding = "8px 12px";
  deleteBtn.style.backgroundColor = "blue";
  deleteBtn.style.color = "#fff";
  deleteBtn.style.border = "none";
  deleteBtn.style.minWidth = "70px";

  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.justifyContent = "space-between";
  li.style.gap = "0.5rem";
  li.style.padding = "0.5rem 0";
  li.style.color = "#fff";

  editBtn.addEventListener("click", () => {
    inputValue.value = text;
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  });

  deleteBtn.addEventListener("click", () => {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  });

  li.appendChild(itemText);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  return li;
};

const renderTodos = () => {
  itemAdd.innerHTML = "";
  todos.forEach((todo, index) => {
    itemAdd.appendChild(createTodoElement(todo, index));
  });
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = inputValue.value.trim();
  if (!text) return;

  todos.push(text);
  saveTodos();
  renderTodos();
  inputValue.value = "";
});

renderTodos();
