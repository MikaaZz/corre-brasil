import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import './footer.css';
import Logo_correBrasil_footer from './logo_footer';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className="footer-content">
      <div className="footer-content__div">
        <h2 className="footer-content__title">
          Conheça mais sobre a Corre Brasil:
        </h2>
        <div className="footer-content__infosContainer">
          <div className="footer-content__infosContainer__linksContainer">
            <div className="footer-content__infosContainer__linksContainer__socialMedia">
              <p className="footer-content__infosContainer__linksContainer__socialMedia--text">
                Redes sociais:
              </p>
              <div className="footer-content__infosContainer__linksContainer__socialMedia--container">
                <a
                  className="footer-content__infosContainer__linksContainer__socialMedia--link"
                  target="_blank"
                  href="http://instagram.com/correbrasil"
                >
                  <Instagram fontSize="large" />
                </a>
                <a
                  className="footer-content__infosContainer__linksContainer__socialMedia--link"
                  target="_blank"
                  href="https://www.facebook.com/correbrasil"
                >
                  <Facebook fontSize="large" />
                </a>
                <a
                  className="footer-content__infosContainer__linksContainer__socialMedia--link"
                  target="_blank"
                  href="https://www.youtube.com/user/vemcorrercomagente"
                >
                  <YouTube fontSize="large" />
                </a>
              </div>
            </div>
            <div className="footer-content__infosContainer__linksContainer__webSites">
              <p className="footer-content__infosContainer__linksContainer__webSites--text">
                Plataformas:
              </p>
              <ul className="footer-content__infosContainer__linksContainer__webSites--list">
                <a
                  className="footer-content__infosContainer__linksContainer__webSites--listLink"
                  target="_blank"
                  href="https://www.correbrasil.com.br/"
                >
                  <li className="footer-content__infosContainer__linksContainer__webSites--listItem">
                    Site Corre Brasil
                  </li>
                </a>
                <a
                  className="footer-content__infosContainer__linksContainer__webSites--listLink"
                  target="_blank"
                  href="https://www.lojacorrebrasil.com.br/"
                >
                  <li className="footer-content__infosContainer__linksContainer__webSites--listItem">
                    Corre Brasil Sportswear
                  </li>
                </a>
                <a
                  className="footer-content__infosContainer__linksContainer__webSites--listLink"
                  target="_blank"
                  href="https://correbrasilmarket.com.br/"
                >
                  <li className="footer-content__infosContainer__linksContainer__webSites--listItem">
                    Corre Brasil Marketplace
                  </li>
                </a>
                <a
                  className="footer-content__infosContainer__linksContainer__webSites--listLink"
                  target="_blank"
                  href="https://vemcorrer.com/"
                >
                  <li className="footer-content__infosContainer__linksContainer__webSites--listItem">
                    VemCorrer
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <Logo_correBrasil_footer />
        </div>
      </div>
    </div>
  );
}

export default Footer;
