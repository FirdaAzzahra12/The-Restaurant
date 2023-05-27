/* eslint-disable import/no-unresolved */
import heroImage from '../../../public/images/hero/hero-image.jpg?sizes[]=425,sizes[]=768,sizes[]=1024,sizes[]=1350';
import heroImageWebp from '../../../public/images/hero/hero-image.jpg?sizes[]=425,sizes[]=768,sizes[]=1024,sizes[]=1350&format=webp';

class BannerInfo extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <picture>
        ${this._createSourceElement(heroImage, 'jpg')}
        ${this._createSourceElement(heroImageWebp, 'webp')}
        <img
          src="${heroImage.src}"        
          width="${heroImage.width}"
          height="${heroImage.height}"
          alt="Banner img"
        />
      </picture>  
      <h1 class="slogan">Good Food. Good Mood.</h1>
    `;
  }

  _createSourceElement({ images }, type) {
    let elements = '';
    images.forEach(({ path, width }, index) => {
      const mediaQuery = index < images.length - 1
        ? `(max-width: ${width}px)`
        : `(min-width: ${images[index - 1].width}px)`;
      const sourceTag = `<source media="${mediaQuery}" srcset="${path}" type="image/${type}">`;

      elements += sourceTag;
    });
    return elements;
  }
}

customElements.define('banner-info', BannerInfo);
