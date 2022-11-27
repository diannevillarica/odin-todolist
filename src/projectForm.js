import setAttributes from "./helpers/setAttributes";
import handleProjectFormSubmit from "./handleProjectFormSubmit";

const projectForm = () => {
  const projectForm = document.createElement("form");
  const projectFormHeading = document.createElement("h2");
  const projectNameLabel = document.createElement("label");
  const projectNameInput = document.createElement("input");
  const projectFormSubmit = document.createElement("button");

  projectFormHeading.textContent = "Add Project";
  projectNameLabel.textContent = "Project Name";
  projectNameInput.type = "text";
  projectFormSubmit.textContent = "Submit";

  setAttributes(projectForm, { class: "project-form" });
  setAttributes(projectNameInput, { id: "name" });
  setAttributes(projectNameLabel, { for: "name" });

  projectForm.appendChild(projectFormHeading);
  projectForm.appendChild(projectNameLabel);
  projectForm.appendChild(projectNameInput);
  projectForm.appendChild(projectFormSubmit);

  projectFormSubmit.addEventListener("click", handleProjectFormSubmit);

  document.addEventListener("mouseup", function (event) {
    const form = document.querySelector("form");
    if (!form.contains(event.target)) {
      document.querySelector(".project-form").style.display = "none";
    }
  });

  return projectForm;
};

export default projectForm;
