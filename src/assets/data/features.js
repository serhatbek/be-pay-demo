import client1 from '/images/Clients/client-1.png';
import client2 from '/images/Clients/client-2.png';
import client3 from '/images/Clients/client-3.png';
import client4 from '/images/Clients/client-4.png';
import client5 from '/images/Clients/client-5.png';
import client6 from '/images/Clients/client-6.png';
import detailImg from '/images/Features/features-img-1.png';
import dashboard1 from '/images/Features/dashboard-1.png';
import dashboard2 from '/images/Features/dashboard-2.png';
import dashboard3 from '/images/Features/dashboard-3.png';
import dashboard4 from '/images/Features/dashboard-4.png';
import dashboard5 from '/images/Features/dashboard-5.png';

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
  dashboardItems: [
    {
      image: dashboard1,
      card: {
        title: 'Accounts Balance',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.',
        btnText: 'Learn more',
        btnIcon: 'arrow-circle',
        btnClass: 'ant-btn--purple',
        btnLink: '/be-pay-demo/',
      },
    },
    {
      image: dashboard2,
      card: {
        title: 'Balance account statistics',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.',
        btnText: 'Learn more',
        btnIcon: 'arrow-circle',
        btnClass: 'ant-btn--purple',
        btnLink: '/be-pay-demo/',
      },
    },
    {
      image: dashboard3,
      card: {
        title: 'Advanced search',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.',
        btnText: 'Learn more',
        btnIcon: 'arrow-circle',
        btnClass: 'ant-btn--purple',
        btnLink: '/be-pay-demo/',
      },
    },
    {
      image: dashboard4,
      card: {
        title: 'Activities',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.',
        btnText: 'Learn more',
        btnIcon: 'arrow-circle',
        btnClass: 'ant-btn--purple',
        btnLink: '/be-pay-demo/',
      },
    },
    {
      image: dashboard5,
      card: {
        title: 'Accounts Balance',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.',
        btnText: 'Learn more',
        btnIcon: 'arrow-circle',
        btnClass: 'ant-btn--purple',
        btnLink: '/be-pay-demo/',
      },
    },
  ],
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
