/* eslint-disable no-undef */
Feature('Favorite Restaurant');

const assert = require('assert');

Scenario('Add and Remove Restaurant from Favorite List', async ({ I }) => {
  // Go to home page
  I.amOnPage('/');

  // navigation CTA
  const firstRestaurantCTA = locate('.resto-name').first();
  const firstRestaurant = locate('.resto-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantCTA);

  // tambah resto ke dalam list favorit
  I.waitForElement('#fav-button');
  I.click('#fav-button');

  // Go to favorite page
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');

  // cek apakah resto yang dijadikan favorite ada di dalam daftar favorite
  const savedRestaurant = locate('.resto-name').first();
  const savedRestaurantName = await I.grabTextFrom(savedRestaurant);
  assert.strictEqual(firstRestaurantName, savedRestaurantName);

  // klik konfirmasi dialog snackbar
  I.click('.snackbar');

  const favoritedRestaurantCTA = locate('.resto-name').first();
  I.click(favoritedRestaurantCTA);

  // hapus resto dari dari daftar favorite
  I.click('#fav-button');

  // cek resto di daftar favorite
  I.dontSeeElement('.restaurant');

  I.say('Test berhasil!');
});
