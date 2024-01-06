import './Pricing.scss';
import { nanoid } from 'nanoid';
import pricingItems from '../../assets/data/pricing';
import {
  Button,
  ClientItem,
  SectionBanner,
  SectionClients,
} from '../../components';
import { Slide } from '../../components/Slider/Slider';

const Pricing = () => {
  const { socialBannerItem, clientItems } = pricingItems;
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

export default Pricing;
