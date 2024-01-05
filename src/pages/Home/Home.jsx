import './Home.scss';
import { nanoid } from 'nanoid';
import { homeItems } from '../../assets/data/home';
import { Slide } from '../../components/Slider/Slider';
import {
  ActionShowcaseCard,
  TestimonialCard,
  Button,
  InfoCard,
  Slider,
  ClientItem,
} from '../../components';

const Home = () => {
  const { payImg, infoItems, ctaCard, testimonialItems, clientItems } =
    homeItems;
  // console.log(clientItems.map((item) => item));
  return (
    <>
      <section className='section section-pay'>
        <div className='container'>
          <div>
            <h2 className='section__title'>Start paying via your smartphone</h2>
            <p className='section__subtitle'>
              System for paying & managing money.
            </p>
            <div>
              <Button
                type='link'
                href='/'
                className='ant-btn--pink'
                iconRight='arrow-circle'
              >
                Try for free
              </Button>
              <Button
                type='link'
                href='/'
                className='ant-btn--purple'
                iconRight='watch'
              >
                Watch video
              </Button>
            </div>
          </div>
          <figure>
            <img src={payImg} />
          </figure>
        </div>
      </section>

      <section className='section section-testimonials'>
        <div className='container'>
          <div className='section-testimonials__top'>
            <ActionShowcaseCard
              title={ctaCard.title}
              desc={ctaCard.desc}
              btnText={ctaCard.btnText}
              btnLink={ctaCard.btnLink}
              btnIcon={ctaCard.btnIcon}
              btnClass='ant-btn--purple'
            />
            <div className='box'>
              {infoItems?.map((item) => (
                <InfoCard
                  key={nanoid()}
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                  iconSize={item.iconSize}
                />
              ))}
            </div>
          </div>
          <div className='section-testimonials__middle'>
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
              {testimonialItems?.map((item) => (
                <Slide key={nanoid()}>
                  <TestimonialCard
                    key={nanoid()}
                    image={item.img}
                    desc={item.desc}
                    name={item.name}
                    job={item.job}
                  />
                </Slide>
              ))}
            </Slider>
            <div className='testimonial-slider__pagination-div'></div>
          </div>
          <div className='section-testimonials__bottom'>
            <h3 className='section__subtitle'>Clients</h3>
            <Slider
              className='client-slider'
              slidesPerView={4}
              navigation={{
                prevEl: '.client-slider__buttons--prev',
                nextEl: '.client-slider__buttons--next',
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
            >
              {clientItems?.map((item) => (
                <Slide key={nanoid()}>
                  <ClientItem image={item} />
                </Slide>
              ))}
            </Slider>
            <div className='client-slider__buttons'>
              <i className='icon icon-chevron-left-square client-slider__buttons--prev'></i>
              <i className='icon icon-chevron-right-square client-slider__buttons--next'></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
