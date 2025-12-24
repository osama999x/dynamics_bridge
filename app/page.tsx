import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import FeaturedOn from './components/FeaturedOn';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <Testimonials />
      <Resources />
      <FeaturedOn />
      <Contact />
      <Footer />
      <ChatButton />
    </main>
  );
}
