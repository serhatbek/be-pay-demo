import './About.scss';
import aboutItems from '../../assets/data/about';
import {
  ActionShowcaseCard,
  Button,
  ClientItem,
  InfoCard,
  SectionBanner,
  SectionClients,
  SectionPageTitle,
  TeamCard,
} from '../../components';
import { nanoid } from 'nanoid';
import { Slide } from '../../components/Slider/Slider';

const About = () => {
  const {
    pageTitleItems,
    ctaCard,
    teamCards,
    socialBannerItem,
    clientItems,
    sectionMiddleItems,
    jobs,
  } = aboutItems;
  return (
    <section className='section section-about section--bg'>
      <SectionPageTitle
        title={pageTitleItems.title}
        desc={pageTitleItems.desc}
      />

      <div className='section-about__top'>
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
            {teamCards?.map((item) => (
              <TeamCard
                key={nanoid()}
                image={item.image}
                name={item.name}
                job={item.job}
                desc={item.desc}
              >
                {item.socialIcons?.map((item) => (
                  <Button
                    key={nanoid()}
                    className='ant-btn--pink'
                    type='link'
                    href={item.link}
                    iconLeft={item.icon}
                  />
                ))}
              </TeamCard>
            ))}
          </div>
        </div>
      </div>

      <div className='section-about__middle'>
        <div className='container'>
          <ActionShowcaseCard
            title={sectionMiddleItems.showcaseCard.title}
            desc={sectionMiddleItems.showcaseCard.desc}
          />

          <figure>
            <img src={sectionMiddleItems.image} />
          </figure>
        </div>
      </div>
      <div className='section-about__bottom'>
        <div className='container'>
          <h3>We are looking for</h3>
          <div className='box'>
            {jobs?.map((item) => (
              <InfoCard
                key={nanoid()}
                className='info-card--blue'
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>

      <SectionClients>
        {clientItems?.map((item) => (
          <Slide key={nanoid()}>
            <ClientItem image={item} />
          </Slide>
        ))}
      </SectionClients>

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
    </section>
  );
};

export default About;
