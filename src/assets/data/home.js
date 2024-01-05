// ../../../public/images/
import user1 from '/images/Home/home_testimonial-1.png';
import user2 from '/images/Home/home_testimonial-2.png';
import user3 from '/images/Home/home_testimonial-3.png';
import payImg from '/images/Home/home_pay_section-img1.png';
import client1 from '/images/Clients/client-1.png';
import client2 from '/images/Clients/client-2.png';
import client3 from '/images/Clients/client-3.png';
import client4 from '/images/Clients/client-4.png';
import client5 from '/images/Clients/client-5.png';
import client6 from '/images/Clients/client-6.png';

export const homeItems = {
  payImg: payImg,
  ctaCard: {
    title: 'A few reasons why Be Pay might be the right fit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Eget nunc scelerisque viverra mauris in. Venenatis cras sed felis eget velit aliquet sagittis id. Sit amet est placerat in egestas. Mauris rhoncus orci.',
    btnText: 'Learn more',
    btnLink: '/',
    btnIcon: 'hor-lines',
  },
  infoItems: [
    {
      title: '01 —',
      text: 'Admin panel',
      icon: 'web',
      iconSize: '50',
    },
    {
      title: '02 —',
      text: 'Safety',
      icon: 'lock',
      iconSize: '50',
    },
    {
      title: '03 —',
      text: 'Statistics',
      icon: 'stats',
      iconSize: '50',
    },
    {
      title: '04 —',
      text: 'Paying',
      icon: 'pay',
      iconSize: '50',
    },
    {
      title: '05 —',
      text: 'Flexible',
      icon: 'flex',
      iconSize: '50',
    },
    {
      title: '06 —',
      text: 'Areas',
      icon: 'area',
      iconSize: '50',
    },
  ],
  testimonialItems: [
    {
      img: user1,
      desc: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie.',
      name: 'Jennifer Lee ',
      job: 'CEO Curabitur',
    },
    {
      img: user2,
      desc: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie.',
      name: 'Tom Johnson ',
      job: 'CEO Muffin Group',
    },
    {
      img: user3,
      desc: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie.',
      name: 'Kevin Perry ',
      job: 'CEO Nulla Purus ',
    },
  ],
  clientItems: [client1, client2, client3, client4, client5, client6],
  socialBannerItem: {
    title: 'The Be Pay plan starts from $14.99',
    desc: 'Find the plan that’s right for you',
    btnText: 'Show prices',
    btnLink: '/',
    btnIcon: 'arrow-circle',
  },
};
