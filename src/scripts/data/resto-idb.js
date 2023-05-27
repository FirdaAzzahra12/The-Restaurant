/* eslint-disable no-unreachable */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
const DB_PROMISE = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

class RestoIdb {
  static async loadResto(id) {
    if (id === undefined) {
      return;
    }
    const db = await DB_PROMISE;
    return db.get(OBJECT_STORE_NAME, id);
    const transaction = db.transaction(OBJECT_STORE_NAME, 'readonly');
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    return store.load(id);
  }

  static async loadRestoList() {
    const db = await DB_PROMISE;
    return db.getAll(OBJECT_STORE_NAME);
  }

  static async addRestaurant(resto) {
    if (!Object.prototype.hasOwnProperty.call(resto, 'id')) {
      return;
    }
    const db = await DB_PROMISE;
    return db.put(OBJECT_STORE_NAME, resto);
  }

  static async deleteResto(id) {
    const db = await DB_PROMISE;
    return db.delete(OBJECT_STORE_NAME, id);
  }
}

export default RestoIdb;
