import './Pricing.scss';
import { nanoid } from 'nanoid';
import pricingItems from '../../assets/data/pricing';
import { Button, SectionBanner } from '../../components';

const Pricing = () => {
  const { socialBannerItem } = pricingItems;
  return (
    <SectionBanner title={socialBannerItem.title} desc={socialBannerItem.desc}>
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
  );
};

export default Pricing;
