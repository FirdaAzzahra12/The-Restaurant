import CONFIG from '../../globals/config';

class RestoInfo extends HTMLElement {
  set infoResto(infoResto) {
    this._infoResto = infoResto;
    this._showRestoInfo();
  }

  _showRestoInfo() {
    const {
      name,
      city,
      address,
      pictureId,
      rating,
      description,
      categories,
      menus,
    } = this._infoResto;

    const KategoriResto = `${createList(categories)}`;
    const MenuMakanan = `${createList(menus.foods)}`;
    const MenuMinuman = `${createList(menus.drinks)}`;

    this.innerHTML = `
    <article class="resto-details">
    <div class="resto-header">
      <h1>${name}</h1>
      <div class="resto-img">
        <img src="${CONFIG.SMALL_BASE_IMAGE_URL}${pictureId}" alt="Resto Image ${name}" crossorigin="anonymous">
      </div>
      <div class="resto-description">
        <h2>Description</h2>
        <p>${description}</p>
      </div>
    </div>
    <hr>
    <section class="resto-info">
      <div class="resto-menus">
        <h2>Menu</h2>
        <div class="menus">
          <div class="sub-menu">
            <h3>Makanan</h3>
            <ul>
              ${MenuMakanan}
            </ul>
          </div>
          <div class="sub-menu">
            <h3>Minuman</h3>
            <ul>
              ${MenuMinuman}
            </ul>
          </div>
        </div>
      </div>
      <div class="details_section">
        <div class="details_content">
          <div class="address">
            <h3>Alamat</h3>
            <p>${address}</p>
          </div>
          <div class="city">
            <h3>Kota</h3>
            <p>${city}</p>
          </div>
          <div class="rating">
            <h3>Penilaian</h3>
            <p class="rating__value">
            ${rating}
            <span class="rating-stars">
              ${Array(Math.floor(rating)).fill('<i class="rating-star"></i>').join('')}
            </span>
          </p>
        </div>
            <div class="categories">
              <h3>Kategori</h3>
              <ul>
                ${KategoriResto}
              </ul>
            </div>
          </div>
      </div>
    </section>
    </article>
    `;
  }
}

function createList(items) {
  let listItems = '';

  for (let i = 0; i < items.length; i++) {
    const itemName = items[i].name;
    listItems += `<li>${itemName}</li>`;
  }

  return listItems;
}

customElements.define('resto-info', RestoInfo);
