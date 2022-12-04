import createProjectListItem from "../helpers/createProjectListItem";

function handleFormSubmit(event) {
  event.preventDefault();

  let projectName = document.getElementById("project-name").value;

  createProjectListItem(projectName);

  document.getElementById("project-name").value = "";
}

export default handleFormSubmit;

// export default handleFormSubmit;
