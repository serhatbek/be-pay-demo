import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, Header } from '../../components';

const Layout = () => {
  const { state } = useNavigation();
  console.log(state);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
