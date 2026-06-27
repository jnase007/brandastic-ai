import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import PitchVideo from './components/PitchVideo';
import Results from './components/Results';
import AuditCTA from './components/AuditCTA';
import PreAuditForm from './components/PreAuditForm';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  return (
    <BookingProvider>
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <Services />
        <HowItWorks />
        <Pricing />
        <PitchVideo />
        <Results />
        <AuditCTA />
        <PreAuditForm />
      </main>
      <Footer />
      <BookingModal />
    </BookingProvider>
  );
}
