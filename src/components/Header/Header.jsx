import './Header.scss';
import { NavLink } from 'react-router-dom';
import { headerItems } from '../../assets/data/header';
import { nanoid } from 'nanoid';
import { Button } from '../../components';

const Header = () => {
  const { logo, navItems, btn } = headerItems;
  return (
    <header className='header'>
      <div className='container'>
        <figure className='header__logo'>
          <img src={logo} alt='logo' />
        </figure>

        <nav>
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
          <Button iconRight='cart'>{btn.text}</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
