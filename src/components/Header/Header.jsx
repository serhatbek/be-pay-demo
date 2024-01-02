import './Header.scss';
import { NavLink } from 'react-router-dom';
import { headerItems } from '../../assets/data/header';
import { nanoid } from 'nanoid';
import { Button, Icon } from '../../components';

const Header = () => {
  const { logo, navItems, btn } = headerItems;
  return (
    <header className='header'>
      <div className='container'>
        <figure className='header__logo'>
          <img src={logo} alt='logo' />
        </figure>

        <Icon size='32' icon='menu-open' />
        <nav>
          <Icon size='32' icon='menu-close' />
          <ul>
            {navItems?.map((item) => {
              return (
                <li key={nanoid()}>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    to={item.link}
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
