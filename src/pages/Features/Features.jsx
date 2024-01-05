import './Features.scss';
import { nanoid } from 'nanoid';
import featuresItems from '../../assets/data/features';
import { Button, SocialBanner } from '../../components';

const Features = () => {
  const { socialBannerItem } = featuresItems;
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

export default Features;
