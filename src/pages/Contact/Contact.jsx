import './Contact.scss';
import { nanoid } from 'nanoid';
import contactItems from '../../assets/data/contact';
import { Button, SectionBanner } from '../../components';

const Contact = () => {
  const { socialBannerItem } = contactItems;
  return (
    <>
      {/* <section className='section section-clients'>
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
          {clientItems?.map((item) => (
            <Slide key={nanoid()}>
              <ClientItem image={item} />
            </Slide>
          ))}
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
      </section> */}
      <SectionBanner
        title={socialBannerItem.title}
        desc={socialBannerItem.desc}
      >
        {socialBannerItem.buttons.map((item) => (
          <Button
            key={nanoid()}
            className={item.btnClass}
            type='link'
            href={item.btnLink}
            iconRight={item.btnIcon}
          >
            {item.btnText}
          </Button>
        ))}
      </SectionBanner>
    </>
  );
};

export default Contact;
