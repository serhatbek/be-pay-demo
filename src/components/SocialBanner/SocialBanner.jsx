import './SocialBanner.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SocialBanner = ({ children, className, title, desc }) => {
  return (
    <div className={classNames('social-banner', className)}>
      <div className='social-banner__content'>
        <h3 className='section__subtitle'>{title}</h3>
        <p className='section__desc'>{desc}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

SocialBanner.propTypes = {
  className: PropTypes.string,
  iconRight: PropTypes.string,
  desc: PropTypes.string,
  btnIcon: PropTypes.string,
  btnText: PropTypes.string,
  btnLink: PropTypes.string,
  type: PropTypes.string,
};

export default SocialBanner;
