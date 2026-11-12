import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Team from './components/Team';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import BookingDrawer from './components/BookingDrawer';
import MobileBookBar from './components/MobileBookBar';
import { BookingProvider } from './context/BookingContext';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <BookingProvider>
      <div className="min-h-screen bg-ink text-bone">
        <SEO />
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Team />
          <Booking />
          <Contact />
        </main>
        <Footer />
        <MobileBookBar />
        <BookingDrawer />
      </div>
    </BookingProvider>
  );
}

export default App;
