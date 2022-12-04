import createElement from "./helpers/createElement";

const listItemArr = [];

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

// export default projectListItem;
export { projectListItem, listItemArr };
