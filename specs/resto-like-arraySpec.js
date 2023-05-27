/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
import {
  itActsAsFavoriteRestoModel,
} from './contract/resto-contract';

let favoriteResto = [];

const FAVORITE_RESTO_ARRAY = {

  loadResto(id) {
    if (!id) {
      return;
    }

    return favoriteResto.find((resto) => resto.id === id);
  },

  loadRestoList() {
    return favoriteResto;
  },

  addRestaurant(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.loadResto(resto.id)) {
      return;
    }

    favoriteResto.push(resto);
  },

  deleteResto(id) {
    favoriteResto = favoriteResto.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestoModel(FAVORITE_RESTO_ARRAY);
});
