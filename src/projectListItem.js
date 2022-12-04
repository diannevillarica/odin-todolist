import createElement from "./helpers/createElement";
import { listItemArr } from "./eventHandlers/handleFormSubmit";

const projectListItem = () => {
  console.log(listItemArr);

  const projectListItemDiv = createElement(
    "div",
    {
      class: "project-list-item",
    },
    ...listItemArr
  );

  return projectListItemDiv;
};

export default projectListItem;
