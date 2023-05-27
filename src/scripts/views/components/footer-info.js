/* eslint-disable no-shadow */
import logo from '../../../public/images/logo-placeholder-image.png';

class FooterInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const FooterInfo = `
        <style>      
        .footer-hub {
          max-width: auto;
          background-color: #333;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0px;
          padding: 62px;
          border-radius: 0;
        }

        .social-media p {
          text-align: center;
          font-family: 'Cookie', serif;
          font-size: 2.4em;
          color: rgb(216, 216, 216);
        }
        
        .social-media a {
          color: #333;
          margin: 10px;
          font-size: 50px;
        }
        
        .logo img {
          height: 150px;
          width: auto;
        }
        
        @media (max-width: 768px) {
          .footer-hub {
            flex-direction: column-reverse;
          }
        
          .social-media {
            margin-bottom: 10px;
          }

          .footer-links {
            margin: auto;
          }
        }
        
  
      .footer-links {
          margin: 0;
          text-align: center;
          background-color: #ff7f7f;
          padding: 20px;
      }
  
      .footer-links p {
          margin: 0;
          #ffffff;
          font-weight: 300;
      }
  
      .footer-links a {
          text-decoration: none;
          #ffffff;
          padding: 15px 0;
      }

        .footer-links a:hover {
          color: #ffffff;
          background-color: #ffffff;
        }
        
        </style>
        <div class="footer-hub">
        <div class="social-media">
          <p>Social Media</p>
          <a href="https://github.com/FirdaAzzahra12"><img src="https://img.icons8.com/fluency/48/null/github.png" alt="GitHub"></a>
          <a href="https://linkedin.com/in/firda-azzahra"><img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png" alt="LinkedIn"></a>
          <a href="https://instagram.com/piidaa.12"><img src="https://img.icons8.com/fluency/48/null/instagram-new.png" alt="Instagram"></a>
        </div>
        <div class="logo">
          <img src="${logo.src}" alt="Logo Resto">
        </div>
      </div>
          <div class="footer-links">
            <p>Resto Apps &#169; 2023 <a href="https://github.com/FirdaAzzahra12" target="_blank">Firda Putri Azzahra</a></p>
          </div>
          `;

    this.shadowRoot.innerHTML = FooterInfo;
  }
}

customElements.define('footer-info', FooterInfo);
