import './Contact.scss';
import { nanoid } from 'nanoid';
import contactItems from '../../assets/data/contact';
import {
  Button,
  ClientItem,
  ContactInfoItem,
  Input,
  SectionBanner,
  SectionClients,
  SectionPageTitle,
} from '../../components';
import { Slide } from '../../components/Slider/Slider';
import { FloatButton, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';

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
          <div className='section-contact__details__right'>
            <Form>
              <Form.Item
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder='Name' />
              </Form.Item>

              <Form.Item>
                <Input placeholder='Email' />
              </Form.Item>

              <Form.Item>
                <Input placeholder='Subject' />
              </Form.Item>

              <Form.Item>
                <TextArea className='text-area' />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button block type='submit' className='ant-btn--purple'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
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
