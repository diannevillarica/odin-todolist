// factory function
const createProjectListItem = (projectName, todoList) => {
  return { projectName: projectName, todoList: [todoList] };
};

export default createProjectListItem;

//TODO: create a function that will render the todo lists items array inside the project object
