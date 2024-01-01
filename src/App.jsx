import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import './assets/css/styles.scss';
import { About, Home, Layout, NotFoundPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/be-pay-demo/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/be-pay-demo/about',
        element: <About />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <h1>
          <i className='icon icon-lock'></i>
          <i className='icon icon-menu-close'></i>
          <i className='icon icon-menu-open'></i>
          <i className='icon icon-info'></i>
          <i className='icon icon-web'></i>
          <i className='icon icon-pay'></i>
          <i className='icon icon-area'></i>
          <i className='icon icon-stats'></i>
          <i className='icon icon-flex'></i>
          <i className='icon icon-watch'></i>
          <i className='icon icon-hor-lines'></i>
          <i className='icon icon-arrow-circle'></i>
          <i className='icon icon-arrow-left'></i>
          <i className='icon icon-arrow-right'></i>
          <i className='icon icon-chevron-up-circle'></i>
          <i className='icon icon-cart'></i>
          <i className='icon icon-phone'></i>
          <i className='icon icon-mail'></i>
          <i className='icon icon-address'></i>
          <i className='icon icon-check-circle'></i>
          <i className='icon icon-facebook'></i>
          <i className='icon icon-twitter'></i>
        </h1>
      </RouterProvider>
    </>
  );
}

export default App;
