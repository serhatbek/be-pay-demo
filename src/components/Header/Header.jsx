import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { headerItems } from '../../assets/data/header';
import { nanoid } from 'nanoid';
import { Icon } from '../../components';
import { useRef, useState } from 'react';
import classNames from 'classnames';
import handleClickOutside from '../../utils/handleClickOutside';

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const { logo, navItems, btn } = headerItems;
  const menuRef = useRef(null);

  const handleMenuOpen = () => {
    setMenuStatus(true);
  };

  const handleMenuClose = () => {
    setMenuStatus(false);
  };

  handleClickOutside(menuRef, handleMenuClose);

  return (
    <header className='header'>
      <div className='container'>
        <NavLink to='/be-pay-demo/'>
          <figure className='header__logo'>
            <img src={logo} alt='logo' />
          </figure>
        </NavLink>

        <Icon size='32' icon='menu-open' onClick={handleMenuOpen} />
        <nav className={classNames(`${menuStatus === true ? 'visible' : ''}`)}>
          <Icon size='32' icon='menu-close' onClick={handleMenuClose} />
          <ul ref={menuRef}>
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
          <Link to={btn.link} className='ant-btn ant-btn--blue header__action'>
            {btn.text}
            <Icon icon='cart' />
          </Link>
          <div className='bg-overlay'></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
