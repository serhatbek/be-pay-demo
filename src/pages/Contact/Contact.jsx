import './Contact.scss';
import { nanoid } from 'nanoid';
import contactItems from '../../assets/data/contact';
import {
  Button,
  ClientItem,
  ContactInfoItem,
  FormSubmitModal,
  Input,
  SectionBanner,
  SectionClients,
  SectionPageTitle,
} from '../../components';
import { Slide } from '../../components/Slider/Slider';
import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const Contact = () => {
  const { pageTitleItems, socialBannerItem, clientItems, detailItems } =
    contactItems;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

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
            <Form autoComplete='off' onFinish={onFinish}>
              <Form.Item
                name={'name'}
                validateTrigger='onSubmit'
                rules={[
                  { required: true, message: 'Please enter your name' },
                  { whitespace: true },
                  { min: 7, message: 'Must be minimum 7 characters' },
                ]}
              >
                <Input placeholder='Name' />
              </Form.Item>

              <Form.Item
                name={'email'}
                validateTrigger='onSubmit'
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input placeholder='Email' />
              </Form.Item>

              <Form.Item
                name={'subject'}
                rules={[
                  { required: true, message: 'Please enter a subject' },
                  { whitespace: true },
                ]}
              >
                <Input placeholder='Subject' />
              </Form.Item>

              <Form.Item
                name={'detail'}
                rules={[
                  { required: true, message: 'Please enter a message' },
                  { max: 500, message: 'Maximum 500 characters.' },
                ]}
              >
                <TextArea className='text-area' />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button block htmlType='submit' className='ant-btn--purple'>
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

      <section>
        <FormSubmitModal />
      </section>

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
