const listItemArr = ["test", "test2"];
// FIXME: Check localStorage for pushing data to listItemArr

const handleFormSubmit = () => {
  let projectName = document.getElementById("project-name").value;
  listItemArr.push(projectName);

  document.getElementById("project-name").value = "";

  return false;
};

export { handleFormSubmit, listItemArr };
