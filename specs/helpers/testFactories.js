/* eslint-disable import/prefer-default-export */
import FAV_BUTTON_PRESENTER from '../../src/scripts/helper/fav-button-presenter';
import RestoIdb from '../../src/scripts/data/resto-idb';

const CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES = async (restaurant) => {
  await FAV_BUTTON_PRESENTER.init({
    favButtonContainer: document.querySelector('#favButtonContainer'),
    favoriteResto: RestoIdb,
    data: {
      restaurant,
    },
  });
};

export { CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES };
