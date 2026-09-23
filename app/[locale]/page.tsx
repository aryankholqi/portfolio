import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Now from '@/components/Now';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Stack />
      <Experience />
      <Education />
      <Now />
      <Contact />
      <Footer />
    </main>
  );
}
