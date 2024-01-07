import './SectionTestimonial.scss';
import PropTypes from 'prop-types';
import Slider from '../../Slider/Slider';

const SectionTestimonial = ({ children }) => {
  return (
    <section className='testimonial-slider'>
      <div className='container'>
        <h3 className='section__subtitle'>Testimonials</h3>
        <Slider
          className='testimonial-slider'
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.testimonial-slider__pagination-div',
            clickable: true,
          }}
        >
          {children}
        </Slider>
        <div className='testimonial-slider__pagination-div'></div>
      </div>
    </section>
  );
};

SectionTestimonial.propTypes = {
  children: PropTypes.any,
};

export default SectionTestimonial;
