import './SectionClients.scss';
import PropTypes from 'prop-types';
import Slider from '../../Slider/Slider';
import Icon from '../../Icon/Icon';

const SectionClients = ({ children }) => {
  return (
    <section className='section section-testimonials__bottom section-clients'>
      <div className='container'>
        <h3 className='section__subtitle'>Clients</h3>
        <Slider
          className='client-slider'
          slidesPerView={4}
          navigation={{
            prevEl: '.client-slider__buttons--prev',
            nextEl: '.client-slider__buttons--next',
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        >
          {children}
        </Slider>
        <div className='client-slider__buttons'>
          <Icon
            icon='chevron-left-square'
            className='client-slider__buttons--prev'
          />
          <Icon
            icon='chevron-right-square'
            className='client-slider__buttons--next'
          />
        </div>
      </div>
    </section>
  );
};

SectionClients.propTypes = {
  children: PropTypes.array,
};

export default SectionClients;
