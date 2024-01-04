import { nanoid } from 'nanoid';
import { homeItems } from '../../assets/data/home';
import {
  ActionShowcaseCard,
  Button,
  InfoCard,
  TestimonialCard,
} from '../../components';
import './Home.scss';
import payImg from '/images/Home/home_pay_section-img1.png';

const Home = () => {
  const { infoItems, ctaCard, testimonialItems } = homeItems;
  return (
    <>
      <section className='section section-pay'>
        <div className='container'>
          <div>
            <h2 className='section__title'>Start paying via your smartphone</h2>
            <p className='section__subtitle'>
              System for paying & managing money.
            </p>
            <div>
              <Button
                type='link'
                href='/'
                className='ant-btn--pink'
                iconRight='arrow-circle'
              >
                Try for free
              </Button>
              <Button
                type='link'
                href='/'
                className='ant-btn--purple'
                iconRight='watch'
              >
                Watch video
              </Button>
            </div>
          </div>
          <figure>
            <img src={payImg} />
          </figure>
        </div>
      </section>

      <section className='section section-testimonials'>
        <div className='container'>
          <div className='section-testimonials__top'>
            <ActionShowcaseCard
              title={ctaCard.title}
              desc={ctaCard.desc}
              btnText={ctaCard.btnText}
              btnLink={ctaCard.btnLink}
              btnIcon={ctaCard.btnIcon}
              btnClass='ant-btn--purple'
            />
            <div className='box'>
              {infoItems?.map((item) => (
                <InfoCard
                  key={nanoid()}
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                  iconSize={item.iconSize}
                />
              ))}
            </div>
          </div>
          <div className='section-testimonials__bottom'>
            <h2>Testimonials</h2>
            {testimonialItems?.map((item) => (
              <TestimonialCard
                key={nanoid()}
                image={item.img}
                desc={item.desc}
                name={item.name}
                job={item.job}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
