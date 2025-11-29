import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <About />
        <FAQ />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
