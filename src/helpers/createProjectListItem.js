const listItemArr = ["Project 1", "Project 2", "Project 3"];

// factory function
function createProjectListItem(projectName) {
  console.log(projectName);
  return { projectName: projectName };
}

export default listItemArr;
