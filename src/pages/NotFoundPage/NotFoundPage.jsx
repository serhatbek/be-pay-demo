import './NotFoundPage.scss';
import { useRouteError } from 'react-router-dom';

const NotFoundPage = () => {
  const error = useRouteError();
  // console.log('route error', error);
  return (
    <section className='section section-error'>
      <div className='container'>
        <h2 className='section__title'>Oops!</h2>
        <h3 className='section__desc'>{error.status}</h3>
        <h3 className='section__desc'>{error.statusText || error.message}</h3>
        <p className='section__subtitle'>
          Sorry, an unexpected error has occurred.
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
