import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import servicesData from "./services-data"
import ServicesParent from './components/ServicesParent';
import PricingParent from "./components/PricingParent"
import Services from './components/Services';
import pricingData from './pricing-data';
import Pricing from './components/Pricing';
import GetInTouch from './components/GetInTouch';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer'


function App() {

  return (
    <div >
      <Navbar />
      <Header />
      <ServicesParent />
      <About />
      <PricingParent />
      <GetInTouch />
      <Testimonial />
      <Footer />
    </div >
  );
}

export default App;
