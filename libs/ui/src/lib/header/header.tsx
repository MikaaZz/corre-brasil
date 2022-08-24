import Logo_correBrasil from './Logo_correBrasil';

import './header.css';

/* eslint-disable-next-line */

export function Header() {
  return (
    <header className="main-header">
      <div className="main-header__content">
        <Logo_correBrasil />
        <nav className="main-header__navigation">
          <a className="main-header__links" href="">
            Papel
          </a>
          <a className="main-header__links" href="">
            Funções
          </a>
          <a className="main-header__links" href="">
            Orientações
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
