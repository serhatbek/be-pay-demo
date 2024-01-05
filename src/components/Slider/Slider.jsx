import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({ children, ...props }) => {
  return (
    <Swiper
      {...props}
      //   className='testimonial-slider'
      modules={[Navigation, Pagination, Autoplay]}
      //   loop={true}
      //   slidesPerView={1}
      //   autoplay={{
      //     delay: 2000,
      //     disableOnInteraction: false,
      //   }}
      //   pagination={{
      //     el: '.testimonial-slider__pagination-div',
      //     clickable: true,
      //   }}
    >
      {children}
    </Swiper>
  );
};

export { SwiperSlide as Slide };
export default Slider;
