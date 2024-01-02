import './Header.scss';
import { NavLink } from 'react-router-dom';
import { headerItems } from '../../assets/data/header';
import { nanoid } from 'nanoid';
import { Button, Icon } from '../../components';
import { useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const { logo, navItems, btn } = headerItems;

  const handleMenuOpen = () => {
    setMenuStatus(true);
  };

  const handleMenuClose = () => {
    setMenuStatus(false);
  };

  return (
    <header className='header'>
      <div className='container'>
        <figure className='header__logo'>
          <img src={logo} alt='logo' />
        </figure>

        <Icon size='32' icon='menu-open' onClick={handleMenuOpen} />
        {/* <CSSTransition></CSSTransition> */}
        <nav className={classNames(`${menuStatus === true ? 'visible' : ''}`)}>
          <Icon size='32' icon='menu-close' onClick={handleMenuClose} />
          <ul>
            {navItems?.map((item) => {
              return (
                <li key={nanoid()}>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    to={item?.link}
                    end
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <Button className='header__action' iconRight='cart'>
            {btn.text}
          </Button>
          <div className='bg-overlay'></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
