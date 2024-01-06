import './SectionBanner.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SectionBanner = ({ children, className, title, desc }) => {
  return (
    <section className={classNames('section section-banner', className)}>
      <div className='section-banner__content'>
        <h3 className='section__subtitle'>{title}</h3>
        <p className='section__desc'>{desc}</p>
        <div>{children}</div>
      </div>
    </section>
  );
};

SectionBanner.propTypes = {
  className: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default SectionBanner;
