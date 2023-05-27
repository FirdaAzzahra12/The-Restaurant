/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/resto-contract';
import RestoIdb from '../src/scripts/data/resto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestoIdb.loadRestoList()).forEach(async (resto) => {
      await RestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(RestoIdb);
});
