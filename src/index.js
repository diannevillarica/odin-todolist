import _ from "lodash";
import "./sass/styles.scss";

import projectsList from "./projectsList";
import todoList from "./todoList";
import projectForm from "./projectForm";

import createElement from "./helpers/createElement";

function App() {
  const main = createElement("main", { id: "main", class: "main" });
  const projects = projectsList();
  const todo = todoList();
  const projectform = projectForm();

  main.appendChild(projects);
  main.appendChild(todo);
  main.appendChild(projectform);

  return main;
}

document.body.appendChild(App());
