import _ from "lodash";
import "./sass/styles.scss";

import projectsPanel from "./projectsPanel";
import todoList from "./todoList";
import projectForm from "./projectForm";

import setAttributes from "./helpers/setAttributes";

function App() {
  const main = document.createElement("main");
  const projects = projectsPanel();
  const todo = todoList();
  const projectform = projectForm();

  setAttributes(main, { id: "main", class: "main" });

  main.appendChild(projects);
  main.appendChild(todo);
  main.appendChild(projectform);

  return main;
}

document.body.appendChild(App());
