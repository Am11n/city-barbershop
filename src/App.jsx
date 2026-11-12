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
import Intro from './components/Intro';
import Experience from './components/Experience';
import Membership from './components/Membership';
import Faq from './components/Faq';

function App() {
  useReveal();

  return (
    <BookingProvider>
      <div className="min-h-screen bg-ink text-bone">
        <Intro />
        <SEO />
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Experience />
          <Team />
          <Membership />
          <Booking />
          <Faq />
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
