import createElement from "./helpers/createElement";

const listItemArr = [
  { projectName: "Project 01" },
  { projectName: "Project 02" },
  { projectName: "Project 03" },
];

const projectListItem = () => {
  const projectListItemDiv = createElement(
    "div",
    { class: "projects-panel-list" },
    ...listItemArr
  );

  for (const child of projectListItemDiv.children) {
    child.classList.add("projects-panel-list-item");
  }

  return projectListItemDiv;
};

// export default projectListItem;
export { projectListItem, listItemArr };
