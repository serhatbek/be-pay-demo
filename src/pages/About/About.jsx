import './About.scss';
import aboutItems from '../../assets/data/about';
import {
  Button,
  ClientItem,
  SectionBanner,
  SectionClients,
} from '../../components';
import { nanoid } from 'nanoid';
import { Slide } from '../../components/Slider/Slider';

const About = () => {
  const { socialBannerItem, clientItems } = aboutItems;
  return (
    <>
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
    </>
  );
};

export default About;
