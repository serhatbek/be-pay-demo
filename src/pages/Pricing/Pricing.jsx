import './Pricing.scss';
import aboutItems from '../../assets/data/about';
import { Button, SocialBanner } from '../../components';
import { nanoid } from 'nanoid';

const Pricing = () => {
  const { socialBannerItem } = aboutItems;
  return (
    <>
      <section className='section section-banner'>
        <SocialBanner
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
        </SocialBanner>
      </section>
    </>
  );
};

export default Pricing;
