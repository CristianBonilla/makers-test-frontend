import 'bootstrap/scss/bootstrap.scss';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import '@/styles/main.scss';

import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import './utils/datepicker.utils';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import loadIcons from './utils/icons/icons.utils';
import App from './pages/App';

loadIcons();

const $root = document.getElementById('root') as HTMLElement;
const root = createRoot($root);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
