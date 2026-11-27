import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import BookingDrawer from './components/BookingDrawer';
import MobileBookBar from './components/MobileBookBar';
import ScrollPole from './components/ScrollPole';
import { BookingProvider } from './context/BookingContext';
import { LanguageProvider } from './i18n/LanguageContext';
import useReveal from './hooks/useReveal';

function Page() {
  useReveal();

  return (
    <div className="min-h-screen bg-ink text-bone">
      <SEO />
      <Header />
      <ScrollPole />
      <main>
        <Hero />
        <Services />
        <Team />
        <Gallery />
        <Reviews />
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
