import './SectionPageTitle.scss';

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

export default SectionPageTitle;
