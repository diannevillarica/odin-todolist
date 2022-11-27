import setAttributes from "./helpers/setAttributes";

const projectList = () => {
  const projectListArr = [];

  const projectList = document.createElement("div");

  setAttributes(projectList, { class: "project-list" });

  return projectList;
};

export default projectList;
