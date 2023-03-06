import { NavLink } from 'react-router-dom';

import Container from '../Container';
import Logo from '../Logo';
import './Header.css';

const Header = () => {
  const getClassName = ({isActive}) => isActive ?
    'header__link header__link_active' :
    'header__link';

  return (
    <header className='header'>
      <Container className='container header__container'>
        <Logo />
        <nav>
          <ul className='header__nav-list'>
            <li>
              <NavLink to='/' className={getClassName}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/characters' className={getClassName}>Characters</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;