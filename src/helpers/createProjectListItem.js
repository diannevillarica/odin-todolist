import createElement from './createElement';
import { listItemArr } from '../variables';

const createProjectListItem = () => {
  // const div = createElement(
  //   'div',
  //   { class: 'projects-panel-list' },
  //   ...listItemArr
  // );
  // for (const child of div.children) {
  //   child.classList.add('projects-panel-list-item');
  // }
  // return div;
  return createElement(
    'div',
    { class: 'projects-panel-listitem' },
    listItemArr[listItemArr.length - 1]
  );
};

export default createProjectListItem;
