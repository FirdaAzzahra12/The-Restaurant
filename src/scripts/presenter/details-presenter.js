import viewModel from './views-presenter';
import UrlParser from '../routes/url-parser';
import { getElement } from '../helper';

class DetailModel extends viewModel {
  constructor({ view, model }) {
    super({ view, model });
    this._formSubmitHandler = this._onFormSubmit.bind(this);
    this.favButtonHandler = this.onFavButtonClick.bind(this);
  }

  async showContent() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { detail, favorite } = this._model;

    try {
      this.restoDetails = await detail.loadRestoDetail(url.id);
    } catch (error) {
      this.view.showMessage('Tidak dapat menemukan detail Resto.');
      return;
    }

    const isFavorite = await favorite.loadResto(this.restoDetails.id);
    this.isFavoriteResto = Boolean(isFavorite);
    this.displayContent(this.restoDetails);
  }

  displayContent(content) {
    super.displayContent(content);
    this.view.favButtonHandler = this.favButtonHandler;
    this.view.favButtonState(this.isFavoriteResto);
  }

  /**
   * @param {Event} event
   */
  async onFavButtonClick(event) {
    event.stopPropagation();
    const {
      id, name, description, pictureId, city, rating,
    } = this.restoDetails;

    this.isFavResto
      ? await this.removeFromFav(id)
      : await this.addToFav({
        id, name, description, pictureId, city, rating,
      });

    this.isFavResto = !this.isFavResto;
    this.view.favButtonState(this.isFavResto);

    if (process.env.NODE_ENV === 'development') {
      getElement('resto-details').dispatchEvent(new Event('fav-btn:updated'));
    }
  }

  /**
   *
   * @param {Event} event
   */
  async _onFormSubmit(event) {
    event.preventDefault();

    try {
      this._view.showLoadingInSubmitButton();

      const reviewForm = getElement('#review-form');
      const formData = new FormData(reviewForm);
      const reviewData = {
        id: this._restoDetails.id,
        name: formData.get('name'),
        review: formData.get('review'),
      };

      const response = await this._model.detail.addReview(reviewData);

      this._view.showNewReviews(response);
      reviewForm.reset();
    } catch (error) {
      this._view.showSnackBar(error.message);
    } finally {
      this._view.showLoadingInSubmitButton(false);
    }
  }

  async addToFav(restaurant) {
    await this._model.favorite.addRestaurant(restaurant);
    this.showSnackbar('Restaurant berhasil ditambahkan ke favorite');
  }

  async removeFromFav(id) {
    await this._model.favorite.deleteResto(id);
    this.showSnackbar('Restaurant berhasil dihapus dari favorite');
  }

  showSnackbar(message) {
    const snackbar = document.createElement('div');
    snackbar.textContent = message;
    snackbar.classList.add('snackbar');
    document.body.appendChild(snackbar);

    setTimeout(() => {
      document.body.removeChild(snackbar);
    }, 3000);
  }
}

export default DetailModel;
