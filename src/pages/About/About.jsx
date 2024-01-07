import './About.scss';
import aboutItems from '../../assets/data/about';
import {
  Button,
  ClientItem,
  SectionBanner,
  SectionClients,
  SectionPageTitle,
} from '../../components';
import { nanoid } from 'nanoid';
import { Slide } from '../../components/Slider/Slider';

const About = () => {
  const { pageTitleItems, socialBannerItem, clientItems } = aboutItems;
  return (
    <section className='section-about'>
      <SectionPageTitle
        title={pageTitleItems.title}
        desc={pageTitleItems.desc}
      />

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
