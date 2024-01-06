import './About.scss';
import aboutItems from '../../assets/data/about';
import { Button, SectionBanner } from '../../components';
import { nanoid } from 'nanoid';

const About = () => {
  const { socialBannerItem } = aboutItems;
  return (
    <>
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
