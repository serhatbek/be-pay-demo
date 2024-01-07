import './Features.scss';
import { nanoid } from 'nanoid';
import featuresItems from '../../assets/data/features';
import {
  Button,
  ClientItem,
  SectionBanner,
  SectionClients,
  SectionPageTitle,
} from '../../components';
import { Slide } from '../../components/Slider/Slider';

const Features = () => {
  const { pageTitleItems, socialBannerItem, clientItems } = featuresItems;
  return (
    <section className='section section-features section--bg'>
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

export default Features;
