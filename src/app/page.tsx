import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Delivery from '@/components/Delivery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="delivery">
        <Delivery />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
