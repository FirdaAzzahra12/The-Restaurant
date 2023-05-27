import { getElement } from '../../helper';
import Page from './page';

class DetailPage extends Page {
  constructor() {
    super({
      basePageElement: '<section id="main-content" class="container"></section>',
      contentElement: 'resto-details',
    });
  }

  get isHasHeroElement() {
    return false;
  }

  _showContent() {
    this.contentElement.details = this._data;
  }

  set favButtonHandler(favButtonHandler) {
    this._favButtonHandler = favButtonHandler;
    this._createFavButtonHandler();
  }

  _createFavButtonHandler() {
    const favButton = getElement('#fav-button');
    favButton.addEventListener('click', this._favButtonHandler);
  }

  favButtonState(isFavorited) {
    const detailElement = getElement('resto-details');
    detailElement.favButtonState = isFavorited;
  }

  set formSubmitHandler(formSubmitHandler) {
    this._formSubmitHandler = formSubmitHandler;
    this._createFormSubmitHandler();
  }

  _createFormSubmitHandler() {
    const reviewForm = getElement('#review-form');
    reviewForm.addEventListener('submit', this._formSubmitHandler);
  }
}

customElements.define('detail-page', DetailPage);
