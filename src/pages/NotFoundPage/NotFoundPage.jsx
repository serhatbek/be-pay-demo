import { useRouteError } from 'react-router-dom';

const NotFoundPage = () => {
  const error = useRouteError();
  // console.log('route error', error);
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.status}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFoundPage;
