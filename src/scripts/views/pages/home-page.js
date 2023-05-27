import Page from './page';

class HomePage extends Page {
  constructor() {
    super({
      basePageElement: `
        <banner-info></banner-info>
        <h2 class="nama-list">Restaurant List</h2>
        <section id="/main-content" class="container"></section>
      `,
      contentElement: 'resto-list',
    });
  }

  get isHasHeroElement() {
    return true;
  }

  _showContent() {
    this.contentElement.restoList = this._data;
  }
}

customElements.define('home-page', HomePage);
