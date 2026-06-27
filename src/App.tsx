import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Challenge from './components/Challenge';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import PitchVideo from './components/PitchVideo';
import MarginEffect from './components/MarginEffect';
import Results from './components/Results';
import AuditCTA from './components/AuditCTA';
import PreAuditForm from './components/PreAuditForm';
import Team from './components/Team';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  return (
    <BookingProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <PitchVideo />
        <Challenge />
        <Services />
        <HowItWorks />
        <Pricing />
        <MarginEffect />
        <Results />
        <AuditCTA />
        <PreAuditForm />
        <Team />
      </main>
      <Footer />
      <BookingModal />
    </BookingProvider>
  );
}
