import './Contact.scss';
import { nanoid } from 'nanoid';
import contactItems from '../../assets/data/contact';
import { Button, SocialBanner } from '../../components';

const Contact = () => {
  const { socialBannerItem } = contactItems;
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

export default Contact;
