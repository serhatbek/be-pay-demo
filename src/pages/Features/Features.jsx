import './Features.scss';
import { nanoid } from 'nanoid';
import featuresItems from '../../assets/data/features';
import {
  ActionShowcaseCard,
  Button,
  ClientItem,
  SectionBanner,
  SectionClients,
  SectionPageTitle,
} from '../../components';
import { Slide } from '../../components/Slider/Slider';

const Features = () => {
  const { pageTitleItems, socialBannerItem, clientItems, detailItems } =
    featuresItems;
  return (
    <section className='section section-features section--bg'>
      <SectionPageTitle
        title={pageTitleItems.title}
        desc={pageTitleItems.desc}
      />

      <section className='section-features__top'>
        <div className='container'>
          <figure>
            <img src={detailItems.image} />
          </figure>
          <div className='box'>
            {detailItems?.detailCards?.map((item) => (
              <ActionShowcaseCard
                key={nanoid()}
                title={item.title}
                desc={item.desc}
                className='cta-card--small'
              />
            ))}
          </div>
          <div className='section-features__top__actions'>
            <Button
              className='ant-btn--purple'
              type='link'
              href='/be-pay-demo/pricing'
              iconLeft='arrow-circle'
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className='section-features__bottom'>
        <div className='container'>
          <div className='box'></div>
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

export default Features;
