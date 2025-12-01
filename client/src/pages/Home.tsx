import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { OrderForm } from '@/components/OrderForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-neu-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <OrderForm />
      <Footer />
    </div>
  );
}
