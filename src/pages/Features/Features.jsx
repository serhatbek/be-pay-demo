import './Features.scss';
import { nanoid } from 'nanoid';
import featuresItems from '../../assets/data/features';
import {
  Button,
  ClientItem,
  SectionBanner,
  SectionClients,
} from '../../components';
import { Slide } from '../../components/Slider/Slider';

const Features = () => {
  const { socialBannerItem, clientItems } = featuresItems;
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

export default Features;
