import client1 from '/images/Clients/client-1.png';
import client2 from '/images/Clients/client-2.png';
import client3 from '/images/Clients/client-3.png';
import client4 from '/images/Clients/client-4.png';
import client5 from '/images/Clients/client-5.png';
import client6 from '/images/Clients/client-6.png';

const contactItems = {
  detailItems: {
    title: 'Do you have any questions?',
    list: [
      {
        title: 'Address workshop',
        desc: 'Level 13, 2 Elizabeth, Victoria 3000 Australia',
        icon: 'address',
      },
      {
        title: 'Call us',
        desc: '+61 (0) 791 803 458',
        icon: 'phone',
      },
      {
        title: 'Write us',
        desc: 'noreply@envato.com',
        icon: 'mail',
      },
    ],
  },
  pageTitleItems: {
    title: 'Contact us',
    desc: 'Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio.',
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

export default contactItems;
