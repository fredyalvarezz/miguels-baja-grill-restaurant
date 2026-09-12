import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MargaritaBand from './components/MargaritaBand/MargaritaBand';
import Menu from './components/Menu/Menu';
import Location from './components/Location/Location';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import MobileBar from './components/MobileBar/MobileBar';
import './styles/global.css';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <Hero />
      <About />
      <MargaritaBand />
      <Menu />
      <Location />
      <FinalCTA />
      <Footer />
      <MobileBar />
    </div>
  );
}
