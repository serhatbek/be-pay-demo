import { NavLink } from 'react-router-dom';
import { headerItems } from '../../assets/data/header';
import { nanoid } from 'nanoid';

const Header = () => {
  const { logo, navItems, btn } = headerItems;
  return (
    <header>
      <div className='container'>
        <figure>
          <img src={logo} alt='logo' />
        </figure>

        <nav>
          <ul>
            {navItems?.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <button>{btn.text}</button>
    </header>
  );
};

export default Header;
