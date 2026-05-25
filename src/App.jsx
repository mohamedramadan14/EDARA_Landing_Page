import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import ProofBand from './components/ProofBand';
import TrustedByMarquee from './components/TrustedByMarquee';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <ProofBand />
        <TrustedByMarquee />
        <Features />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
