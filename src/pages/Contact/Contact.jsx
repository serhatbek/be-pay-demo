import './Contact.scss';
import { nanoid } from 'nanoid';
import contactItems from '../../assets/data/contact';
import {
  Button,
  ClientItem,
  SectionBanner,
  SectionClients,
} from '../../components';
import { Slide } from '../../components/Slider/Slider';

const Contact = () => {
  const { socialBannerItem, clientItems } = contactItems;
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

export default Contact;
