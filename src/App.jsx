import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Experience from './components/Experience';
import Craft from './components/Craft';
import Gallery from './components/Gallery';
import StatsBanner from './components/StatsBanner';
import Products from './components/Products';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Intro from './components/Intro';
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
      <Intro />
      <SEO />
      <Header />
      <ScrollPole />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Craft />
        <Team />
        <Gallery />
        <StatsBanner />
        <Reviews />
        <Experience />
        <Products />
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
