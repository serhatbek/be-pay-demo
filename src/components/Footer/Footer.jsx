import { Link, NavLink } from 'react-router-dom';
import './Footer.scss';
import { footerItems } from '../../assets/data/footer';
import { nanoid } from 'nanoid';
import Icon from '../Icon/Icon';

const Footer = () => {
  const { muffin, wordpress, navItems } = footerItems;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log('scroll to top');
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__copyright'>
          <div>
            <span>Betheme by</span>
            <Link target='_blank' to={muffin.url}>
              {muffin.text}
            </Link>
          </div>
          <span>All Rights Reserved</span>
          <div>
            <span>Powered by</span>
            <Link target='_blank' to={wordpress.url}>
              {wordpress.text}
            </Link>
          </div>
        </div>

        <nav className='footer__menu'>
          <ul>
            {navItems?.map((item) => (
              <li key={nanoid()}>
                <NavLink to={item.link} end>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <Icon
            className='footer__menu__scroll-icon'
            icon='chevron-up-circle'
            onClick={scrollToTop}
            size='32'
          />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
