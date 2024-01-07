import './SectionPageTitle.scss';
import PropTypes from 'prop-types';

const SectionPageTitle = ({ title, desc }) => {
  return (
    <section className='section section-page-title'>
      <div className='container'>
        <h2 className='section__title'>{title}</h2>
        <p className='section__desc'>{desc}</p>
      </div>
    </section>
  );
};

SectionPageTitle.propTypes = {
  desc: PropTypes.string,
  title: PropTypes.string,
};

export default SectionPageTitle;
