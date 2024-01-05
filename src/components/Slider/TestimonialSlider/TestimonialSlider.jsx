import './TestimonialSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = ({ children }) => {
  //   const sliderOptions = {
  //     slidesPerView: 1,
  //     pagination: true,
  //     navigation: true,
  //     loop: false,
  //     // autoplay: {
  //     //  delay: 1000,
  //     //  disableOnInteraction: false,
  //     // },
  //     ...settings,
  //     // you can override setting options pass settings props to this component
  //   };
  return (
    <Swiper
      className='testimonial-slider'
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 1000 }}
      //   navigation
      pagination={{
        el: '.testimonial-slider__pagination-div',
        clickable: true,
      }}
      //   {...sliderOptions}
    >
      {children}
    </Swiper>
  );
};

export { SwiperSlide as Slide };
export default TestimonialSlider;
