const inputValue = document.querySelector("#item");
const itemAdd = document.querySelector("#items");
const addBtn = document.querySelector("#btn");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = inputValue.value.trim();

  if (!text) return;

  const itemText = document.createElement("span");
  itemText.textContent = text;
  itemText.style.flex = "1";
  itemText.style.marginRight = "1rem";
  itemText.style.alignSelf = "center";

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.textContent = "Edit";
  editBtn.style.padding = "8px 12px";
  editBtn.style.minWidth = "70px";

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";
  deleteBtn.style.padding = "8px 12px";
  deleteBtn.style.minWidth = "70px";

  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.justifyContent = "space-between";
  li.style.gap = "0.5rem";
  li.style.padding = "0.5rem 0";

  li.appendChild(itemText);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  itemAdd.appendChild(li);
  inputValue.value = "";

  editBtn.addEventListener("click", () => {
    inputValue.value = text;
    li.remove();
  });

  deleteBtn.addEventListener("click", () => {
    inputValue.value = text;
    li.remove();
  });
});
