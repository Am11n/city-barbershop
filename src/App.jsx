import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Experience from './components/Experience';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Membership from './components/Membership';
import Booking from './components/Booking';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Intro from './components/Intro';
import BookingDrawer from './components/BookingDrawer';
import MobileBookBar from './components/MobileBookBar';
import { BookingProvider } from './context/BookingContext';
import { LanguageProvider } from './i18n/LanguageContext';
import useReveal from './hooks/useReveal';

function Page() {
  useReveal();

  return (
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
        <Reviews />
        <Membership />
        <Booking />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBookBar />
      <BookingDrawer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <Page />
      </BookingProvider>
    </LanguageProvider>
  );
}
