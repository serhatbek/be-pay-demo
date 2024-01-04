import { Button, InfoCard } from '../../components';
import './Home.scss';
import payImg from '/images/Home/home_pay_section-img1.png';

const Home = () => {
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
        <div className='section-testimonials__top'>
          <InfoCard title='01 —' text='Admin panel' icon='web' iconSize='50' />
        </div>
      </section>
    </>
  );
};

export default Home;
