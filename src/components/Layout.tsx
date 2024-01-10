import Contact from './Contact';
import Hero from './Hero';
import Tours from './Tours/Tours';
import Footer from './Footer';

const Layout = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Tours />
      <Contact/>
      <Footer/>
    </>
  );
};

export default Layout;
