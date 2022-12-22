import createElement from './helpers/createElement';
import createProjectListItem from './helpers/createProjectListItem';

const projectsList = () => {
  const projectsListDiv = createElement('div', { class: 'projects-panel' }); // main div
  const heading = createElement('h2', { class: 'heading' }, 'Projects'); // heading
  const addProjectButton = createElement(
    'button',
    {
      class: 'projects-panel-button',
    },
    'Add Project'
  );

  const projectsPanelList = createElement('div', {
    class: 'projects-panel-list',
  });

  const projectListItem = createProjectListItem();

  projectsPanelList.append(projectListItem);

  projectsListDiv.append(heading, addProjectButton, projectsPanelList);

  // functionality
  addProjectButton.addEventListener('click', () => {
    document.querySelector('.project-form').style.display = 'flex';
    document.querySelector('.main').style.backgroundColor = 'black'; // FIXME: this is not working
  });

  return projectsListDiv;
};

export default projectsList;
