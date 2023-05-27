import API_ENDPOINT from '../globals/api-endpoint';
import { getData, postData } from '../helper';

class restoApi {
  static async loadRestoList() {
    try {
      const jsonResponse = await getData(API_ENDPOINT.LIST);
      if (jsonResponse.restaurants) {
        return jsonResponse.restaurants;
      }
      throw new Error('Tidak ada daftar Restaurant.');
    } catch (error) {
      console.error(error);
    }
  }

  static async loadRestoDetail(id) {
    try {
      const jsonResponse = await getData(API_ENDPOINT.DETAIL(id));
      if (jsonResponse.restaurant) {
        return jsonResponse.restaurant;
      }
      throw new Error('Tidak dapat menemukan detail Restaurant.');
    } catch (error) {
      console.error(error);
    }
  }

  static async addReview(data) {
    const response = await postData(API_ENDPOINT.ADD_REVIEW, data);
    if (response.review) {
      return response.review;
    }
    throw new Error('Terjadi kesalahan, silahkan ulangi kembali.');
  }
}

export default restoApi;
