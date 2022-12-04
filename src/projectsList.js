import createElement from "./helpers/createElement";
import projectListItem from "./projectListItem";

const projectsList = () => {
  const projectsList = createElement("div", { class: "projects-panel" }); // main div
  const heading = createElement("h2", { class: "heading" }, "Projects"); // heading
  const addProjectButton = createElement(
    "button",
    {
      class: "add-project-button",
    },
    "Add Project"
  ); // add project button
  const projectListItems = projectListItem();

  projectsList.appendChild(heading);
  projectsList.appendChild(addProjectButton);
  projectsList.appendChild(projectListItems);

  // functionality
  addProjectButton.addEventListener("click", () => {
    document.querySelector(".project-form").style.display = "flex";
    document.querySelector(".main").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)"; // FIXME: this is not working
  });

  return projectsList;
};

export default projectsList;
