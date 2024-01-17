import { Outlet } from 'react-router-dom';
import { Footer, Header, Modal } from '../../components';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Modal />
      <Footer />
    </>
  );
};

export default Layout;
