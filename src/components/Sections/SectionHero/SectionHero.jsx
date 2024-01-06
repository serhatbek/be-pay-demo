import './SectionHero.scss';

const SectionHero = ({ title, desc, image, children }) => {
  return (
    <section className='section section-hero'>
      <div className='container'>
        <div>
          <h2 className='section__title'>{title}</h2>
          <p className='section__desc'>{desc}</p>
          <div>{children}</div>
        </div>
        <figure>
          <img src={image} />
        </figure>
      </div>
    </section>
  );
};

export default SectionHero;
