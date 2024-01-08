import client1 from '/images/Clients/client-1.png';
import client2 from '/images/Clients/client-2.png';
import client3 from '/images/Clients/client-3.png';
import client4 from '/images/Clients/client-4.png';
import client5 from '/images/Clients/client-5.png';
import client6 from '/images/Clients/client-6.png';

const pricingItems = {
  cards: [
    {
      title: 'Learn a few reasons why Be Pay might be the right fit',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Eget nunc scelerisque viverra mauris in.',
      btnText: 'Learn more',
      btnIcon: 'arrow-circle',
      btnClass: 'ant-btn--purple',
      btnLink: '/be-pay-demo/',
    },
    {
      title: 'Do you need more options from Be Pay? Contact us',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Eget nunc scelerisque viverra mauris in.',
      btnText: 'Contact us',
      btnIcon: 'arrow-circle',
      btnClass: 'ant-btn--purple',
      btnLink: '/be-pay-demo/contact',
    },
  ],
  pageTitleItems: {
    title: 'Pricing list',
    desc: 'Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.Curabitur et ligula.',
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

export default pricingItems;
