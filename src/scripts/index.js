import 'regenerator-runtime';
import '../styles/style.css';
import './views/components';
import App from './views/app';
import { getElement } from './helper';
import swRegister from './helper/sw-register';

const app = new App({
  navBar: getElement('nav-bar'),
  contentContainer: getElement('#content'),
});

window.addEventListener('load', () => {
  app.renderContent();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderContent();
});
