import './About.scss';
import aboutItems from '../../assets/data/about';
import { Button, SocialBanner } from '../../components';

const About = () => {
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

export default About;
