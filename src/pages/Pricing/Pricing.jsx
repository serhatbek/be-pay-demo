import './Pricing.scss';
import { nanoid } from 'nanoid';
import pricingItems from '../../assets/data/pricing';
import {
  ActionShowcaseCard,
  Button,
  ClientItem,
  PricingCard,
  SectionBanner,
  SectionClients,
  SectionPageTitle,
} from '../../components';
import { Slide } from '../../components/Slider/Slider';

const Pricing = () => {
  const { pageTitleItems, socialBannerItem, clientItems, cards, pricingCards } =
    pricingItems;
  return (
    <section className='section section-pricing section--bg'>
      <SectionPageTitle
        title={pageTitleItems.title}
        desc={pageTitleItems.desc}
      />

      <section className='section-pricing__top'>
        <div className='container'>
          <div className='box'>
            {pricingCards?.map((item) => (
              <PricingCard
                className={item.className}
                title={item.title}
                price={item.price}
                per={item.per}
                popular={item.popular}
                desc={item.desc}
                listItems={item.listItems}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='section-pricing__bottom'>
        <div className='container'>
          <div className='box'>
            {cards?.map((item) => (
              <ActionShowcaseCard
                key={nanoid()}
                title={item.title}
                desc={item.desc}
                btnClass={item.btnClass}
                btnText={item.btnText}
                btnLink={item.btnLink}
                btnIcon={item.btnIcon}
              />
            ))}
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

export default Pricing;
