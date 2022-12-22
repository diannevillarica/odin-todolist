import createElement from './helpers/createElement';
import ProjectListItem from './ProjectListItem';
import { listItemArr } from './variables';
import createProjectListItem from './helpers/createProjectListItem';

const projectForm = () => {
  const projectForm = createElement('form', { class: 'project-form' });
  const projectFormHeading = createElement(
    'h2',
    { class: 'heading' },
    'Add Project'
  );
  const projectNameLabel = createElement(
    'label',
    { for: 'project-name' },
    'Project Name'
  );
  const projectNameInput = createElement('input', {
    id: 'project-name',
    type: 'text',
    placeholder: 'Project Name',
    required: true,
  });
  const projectFormSubmit = createElement(
    'button',
    {
      class: 'project-form-submit',
      type: 'submit',
    },
    'Submit'
  );

  projectForm.append(
    projectFormHeading,
    projectNameLabel,
    projectNameInput,
    projectFormSubmit
  );

  projectForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let input = document.querySelector('#project-name').value;

    let listItem = ProjectListItem(input);

    listItemArr.push(listItem);

    const projectListItem = createProjectListItem();

    document.querySelector('.projects-panel-list').append(projectListItem);

    document.querySelector('#project-name').value = '';
  });

  document.addEventListener('mouseup', (event) => {
    const form = document.querySelector('form');
    if (!form.contains(event.target)) {
      document.querySelector('.project-form').style.display = 'none';
    }
  });

  return projectForm;
};

export default projectForm;
