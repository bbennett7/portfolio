import { Home, About, EBDesign, WikiTrash, CodeCoach, Propertii, Contact } from '../pages';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    exact: true,
    name: 'About',
    component: About
  },
  {
    path: '/erinboyledesign',
    exact: true,
    name: 'Erin Boyle Design',
    component: EBDesign
  },
  {
    path: '/wikitrash',
    exact: true,
    name: 'WikiTrash',
    component: WikiTrash
  },
  {
    path: '/codecoach',
    exact: true,
    name: 'CodeCoach',
    component: CodeCoach
  },
  {
    path: '/propertii',
    exact: true,
    name: 'Propertii',
    component: Propertii
  },
  {
    path: '/contact',
    exact: true,
    name: 'Contact',
    component: Contact
  }
];

export default routes;
