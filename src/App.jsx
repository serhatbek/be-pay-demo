import './assets/css/styles.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Features,
  Home,
  Layout,
  NotFoundPage,
  Pricing,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/be-pay-demo/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/be-pay-demo/about',
        element: <About />,
      },
      {
        path: '/be-pay-demo/features',
        element: <Features />,
      },
      {
        path: '/be-pay-demo/pricing',
        element: <Pricing />,
      },
      {
        path: '/be-pay-demo/contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
