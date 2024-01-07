import client1 from '/images/Clients/client-1.png';
import client2 from '/images/Clients/client-2.png';
import client3 from '/images/Clients/client-3.png';
import client4 from '/images/Clients/client-4.png';
import client5 from '/images/Clients/client-5.png';
import client6 from '/images/Clients/client-6.png';

import team1 from '/images/About/team-1.jpg';
import team2 from '/images/About/team-2.jpg';
import team3 from '/images/About/team-3.jpg';

const aboutItems = {
  pageTitleItems: {
    title: 'About us',
    desc: 'Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero.',
  },
  ctaCard: {
    title: 'Meet our Be Pay team',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Eget nunc scelerisque viverra mauris in. Venenatis cras sed felis eget velit aliquet sagittis id.',
    btnText: 'Contact us',
    btnLink: '/be-pay-demo/contact',
    btnIcon: 'arrow-circle',
  },
  teamCards: [
    {
      name: 'Jennifer Lee',
      job: 'Organizer',
      desc: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum.',
      image: team1,
      socialIcons: [
        {
          icon: 'facebook',
          link: '/be-pay-demo/',
        },
        {
          icon: 'twitter',
          link: '/be-pay-demo/',
        },
      ],
    },
    {
      name: 'Kevin Perry',
      job: 'Organizer',
      desc: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum.',
      image: team2,
      socialIcons: [
        {
          icon: 'facebook',
          link: '/be-pay-demo/',
        },
        {
          icon: 'twitter',
          link: '/be-pay-demo/',
        },
      ],
    },
    {
      name: 'Brandon Ross',
      job: 'Organizer',
      desc: 'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum.',
      image: team3,
      socialIcons: [
        {
          icon: 'facebook',
          link: '/be-pay-demo/',
        },
        {
          icon: 'twitter',
          link: '/be-pay-demo/',
        },
      ],
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

export default aboutItems;
