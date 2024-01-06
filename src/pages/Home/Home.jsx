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
  Icon,
  SectionBanner,
  SectionClients,
  SectionTestimonial,
} from '../../components';

const Home = () => {
  const {
    payImg,
    infoItems,
    ctaCard,
    testimonialItems,
    clientItems,
    socialBannerItem,
  } = homeItems;
  return (
    <>
      <section className='section section-pay'>
        <div className='container'>
          <div>
            <h2 className='section__title'>Start paying via your smartphone</h2>
            <p className='section__desc'>System for paying & managing money.</p>
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

      <section className='section-multiple'>
        <section className='section-reasons'>
          <div className='container'>
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
        </section>

        <SectionTestimonial>
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
        </SectionTestimonial>
      </section>

      <SectionClients>
        {clientItems.map((item) => (
          <Slide key={nanoid()}>
            <ClientItem image={item} />
          </Slide>
        ))}
      </SectionClients>

      <SectionBanner
        title={socialBannerItem.title}
        desc={socialBannerItem.desc}
      >
        <Button
          type='link'
          href={socialBannerItem.btnLink}
          iconRight={socialBannerItem.btnIcon}
          className='ant-btn--pink'
        >
          {socialBannerItem.btnText}
        </Button>
      </SectionBanner>
    </>
  );
};

export default Home;
