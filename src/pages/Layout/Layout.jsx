import { Outlet } from 'react-router-dom';
import { Footer, Header, Modal } from '../../components';
import { useState } from 'react';

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  return (
    <div
      className={`${
        isModalOpen ? 'app-wrapper position-fixed' : 'app-wrapper'
      }`}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Modal setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Layout;
