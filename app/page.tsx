import Hero from '@/components/home/Hero';
import DailyMenu from '@/components/home/DailyMenu';
import AboutQuote from '@/components/home/AboutQuote';
import Reservations from '@/components/home/Reservations';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <DailyMenu />
      <AboutQuote />
      <Reservations />
    </main>
  );
}
