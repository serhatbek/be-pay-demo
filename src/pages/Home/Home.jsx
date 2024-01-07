import './Home.scss';
import { nanoid } from 'nanoid';
import { homeItems } from '../../assets/data/home';
import { Slide } from '../../components/Slider/Slider';
import {
  ActionShowcaseCard,
  TestimonialCard,
  Button,
  InfoCard,
  ClientItem,
  SectionBanner,
  SectionClients,
  SectionTestimonial,
  SectionHero,
} from '../../components';

const Home = () => {
  const {
    heroItems,
    infoItems,
    ctaCard,
    testimonialItems,
    clientItems,
    socialBannerItem,
  } = homeItems;
  return (
    <section className='section section-home'>
      <SectionHero
        title={heroItems.title}
        desc={heroItems.desc}
        image={heroItems.img}
      >
        {heroItems?.buttons?.map((btn) => (
          <Button
            key={nanoid()}
            type='link'
            href={btn.href}
            className={btn.class}
            iconRight={btn.icon}
          >
            {btn.text}
          </Button>
        ))}
      </SectionHero>

      <div className='wrapper'>
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
      </div>

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
    </section>
  );
};

export default Home;
