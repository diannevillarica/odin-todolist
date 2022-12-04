import createElement from "./helpers/createElement";

const todoList = () => {
  const todoList = createElement("div", { class: "todo-list" });
  const heading = createElement("h2", { class: "heading" }, "To Do List");
  const addTodoButton = createElement(
    "button",
    { class: "add-todo-button" },
    "Add Todo"
  );

  todoList.appendChild(heading);
  todoList.appendChild(addTodoButton);

  return todoList;
};

export default todoList;
