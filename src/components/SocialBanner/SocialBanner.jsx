import './SocialBanner.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SocialBanner = ({
  className,
  title,
  desc,
  btnClass,
  btnText,
  btnIcon,
  btnLink,
}) => {
  return (
    <div className={classNames('social-banner', className)}>
      <div className='social-banner__content'>
        <h3 className='section__subtitle'>{title}</h3>
        <p className='section__desc'>{desc}</p>
        <Button className={btnClass} iconRight={btnIcon} type={btnLink}>
          {btnText}
        </Button>
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
