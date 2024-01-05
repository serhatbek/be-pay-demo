import user1 from '../../../public/images/Home/home_testimonial-1.png';
import user2 from '../../../public/images/Home/home_testimonial-2.png';
import user3 from '../../../public/images/Home/home_testimonial-3.png';
import payImg from '../../../public/images/Home/home_pay_section-img1.png';

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
};
