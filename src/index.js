import _ from 'lodash';
import './sass/styles.scss';

import projectsList from './projectsList';
import todoList from './todoList';
import projectForm from './projectForm';

import createElement from './helpers/createElement';

function App() {
  const main = createElement('main', { id: 'main', class: 'main' });
  const projectslist = projectsList();
  const todolist = todoList();
  const projectform = projectForm();

  main.append(projectslist, todolist, projectform);

  return main;
}

document.body.append(App());
