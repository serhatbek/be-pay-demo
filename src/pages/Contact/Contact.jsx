import './Contact.scss';
import { nanoid } from 'nanoid';
import contactItems from '../../assets/data/contact';
import {
  Button,
  ClientItem,
  ContactInfoItem,
  SectionBanner,
  SectionClients,
  SectionPageTitle,
} from '../../components';
import { Slide } from '../../components/Slider/Slider';

const Contact = () => {
  const { pageTitleItems, socialBannerItem, clientItems, detailItems } =
    contactItems;
  return (
    <section className='section section-contact section--bg'>
      <SectionPageTitle
        title={pageTitleItems.title}
        desc={pageTitleItems.desc}
      />

      <section className='section-contact__details'>
        <div className='container'>
          <div className='section-contact__details__left'>
            <h3>{detailItems.title}</h3>
            <div className='box'>
              {detailItems.list?.map((item) => (
                <ContactInfoItem
                  key={nanoid()}
                  title={item.title}
                  desc={item.desc}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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

export default Contact;
