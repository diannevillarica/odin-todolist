import setAttributes from "./helpers/setAttributes";

const todoList = () => {
  const todoList = document.createElement("div");
  const heading = document.createElement("h2");
  const addTodoButton = document.createElement("button");

  setAttributes(todoList, { class: "todo-list" });
  setAttributes(heading, { class: "heading" });
  setAttributes(addTodoButton, { class: "add-todo-button" });

  todoList.appendChild(heading);
  todoList.appendChild(addTodoButton);
  heading.textContent = "Todo List";
  addTodoButton.textContent = "Add Todo";

  return todoList;
};

export default todoList;
