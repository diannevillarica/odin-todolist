import setAttributes from "./helpers/setAttributes";

import projectList from "./projectList";

const projectsPanel = () => {
  const projectsPanel = document.createElement("div"); // main div
  const heading = document.createElement("h2");
  const addProjectButton = document.createElement("button");
  const projectLists = projectList();

  setAttributes(projectsPanel, { class: "projects-panel" });
  setAttributes(heading, { class: "heading" });
  setAttributes(addProjectButton, { class: "add-project-button" });

  projectsPanel.appendChild(heading);
  projectsPanel.appendChild(addProjectButton);
  projectsPanel.appendChild(projectLists);

  heading.textContent = "Projects";
  addProjectButton.textContent = "Add Project";

  // functionality
  addProjectButton.addEventListener("click", () => {
    document.querySelector(".project-form").style.display = "flex";
    document.querySelector(".main").style.background = "rgba(0, 0, 0, 0.5)"; // FIX ME: this is not working
  });

  return projectsPanel;
};

export default projectsPanel;
