import createElement from "./helpers/createElement";
import handleFormSubmit from "./eventHandlers/handleFormSubmit";

const projectForm = () => {
  const projectForm = createElement("form", { class: "project-form" });
  const projectFormHeading = createElement(
    "h2",
    { class: "heading" },
    "Add Project"
  );
  const projectNameLabel = createElement(
    "label",
    { for: "project-name" },
    "Project Name"
  );
  const projectNameInput = createElement("input", {
    id: "project-name",
    type: "text",
    placeholder: "Project Name",
  });
  const projectFormSubmit = createElement(
    "button",
    {
      class: "project-form-submit",
      type: "submit",
    },
    "Submit"
  );

  projectForm.appendChild(projectFormHeading);
  projectForm.appendChild(projectNameLabel);
  projectForm.appendChild(projectNameInput);
  projectForm.appendChild(projectFormSubmit);

  projectFormSubmit.addEventListener("click", handleFormSubmit);

  document.addEventListener("mouseup", (event) => {
    const form = document.querySelector("form");
    if (!form.contains(event.target)) {
      document.querySelector(".project-form").style.display = "none";
    }
  });

  return projectForm;
};

export default projectForm;
