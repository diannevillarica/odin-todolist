import createElement from "./helpers/createElement";
import listItemArr from "./helpers/createProjectListItem";

// console.log(item);

const projectListItem = () => {
  const projectListItemDiv = createElement(
    "div",
    {
      class: "projects-panel-list",
    },
    ...listItemArr
  );

  for (const child of projectListItemDiv.children) {
    child.classList.add("projects-panel-list-item");
  }

  return projectListItemDiv;
};

export default projectListItem;
