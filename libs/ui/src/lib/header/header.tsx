import Logo_correBrasil from './Logo_correBrasil';

import './header.css';

/* eslint-disable-next-line */

interface childrens {
  headerContentNav: JSX.Element;
}

export function Header(props: childrens) {
  return (
    <header className="main-header">
      <div className="main-header__content">
        <Logo_correBrasil />
        <nav className="main-header__navigation">{props.headerContentNav}</nav>
      </div>
    </header>
  );
}

export default Header;
