import NavbarComponent from '../components/Navbar';
import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import SolutionsSection from '../components/SolutionsSection';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <PortfolioSection />
      <SolutionsSection />
      <ProcessSection />
      <Footer />
    </>
  );
}

export default Home;