const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const liContainer = document.getElementById("liContainer");
const deleteBtn = document.getElementById("deleteBtn");

const handleCreate = () => {
  const inputValue = inputBox.value;
  liContainer.innerHTML += `<li>${inputValue}</li>`;
};
addBtn.addEventListener("click", handleCreate);

const handleDelete = () => {
  const items = liContainer.getElementsByTagName("li");
  if (items.length > 0) {
    liContainer.removeChild(items[items.length - 1]);
  }
};

deleteBtn.addEventListener("click");
