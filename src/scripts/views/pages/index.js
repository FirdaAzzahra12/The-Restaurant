import RestoListPresenter from '../../presenter/list-presenter';
import RestoDetailPresenter from '../../presenter/details-presenter';
import RestoData from '../../data/resto-api';
import RestoIdb from '../../data/resto-idb';
import { createElement } from '../../helper';

import './home-page';
import './detail-page';
import './favorite-page';

function home() {
  const view = createElement('home-page');
  const model = RestoData;
  const presenter = new RestoListPresenter({ view, model });
  return presenter;
}

function detail() {
  const view = createElement('detail-page');
  const model = {
    detail: RestoData,
    favorite: RestoIdb,
  };
  const presenter = new RestoDetailPresenter({ view, model });
  return presenter;
}

function favorite() {
  const view = createElement('favorite-page');
  const model = RestoIdb;
  const presenter = new RestoListPresenter({ view, model });
  return presenter;
}

export { home, detail, favorite };
