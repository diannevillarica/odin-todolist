import createProjectListItem from "../helpers/createProjectListItem";

function handleFormSubmit(event) {
  event.preventDefault();

  const projectName = document.querySelector("#project-name").value;
  console.log(projectName);
  // createProjectListItem(projectName);
  document.getElementById("project-name").value = "";

  return projectName;
}

export default handleFormSubmit;
