import client1 from '/images/Clients/client-1.png';
import client2 from '/images/Clients/client-2.png';
import client3 from '/images/Clients/client-3.png';
import client4 from '/images/Clients/client-4.png';
import client5 from '/images/Clients/client-5.png';
import client6 from '/images/Clients/client-6.png';

import detailImg from '/images/Features/features-img-1.png';

const featuresItems = {
  pageTitleItems: {
    title: 'Features',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus.',
  },
  detailItems: {
    image: detailImg,
    detailCards: [
      {
        title: 'Accounts balance',
        desc: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor.',
      },
      {
        title: 'Balance account statistics',
        desc: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor.',
      },
      {
        title: 'Activities',
        desc: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor.',
      },
      {
        title: 'Advanced seach',
        desc: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor.',
      },
      {
        title: 'Expenditure statistics',
        desc: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor.',
      },
      {
        title: 'Cards settings',
        desc: 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor.',
      },
    ],
  },
  clientItems: [client1, client2, client3, client4, client5, client6],
  socialBannerItem: {
    title: 'Follow us on social media',
    desc: 'Vestibulum dapibus, mauris nec malesuada fames ac turpis velit',
    buttons: [
      {
        btnText: 'Facebook',
        btnLink: '/be-pay-demo/',
        btnIcon: 'facebook',
        btnClass: 'ant-btn--pink',
      },
      {
        btnText: 'Twitter',
        btnLink: '/be-pay-demo/',
        btnIcon: 'twitter',
        btnClass: 'ant-btn--blue',
      },
    ],
  },
};

export default featuresItems;
