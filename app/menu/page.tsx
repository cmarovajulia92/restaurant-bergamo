import type { Metadata } from 'next';
import FoodMenu from '@/components/menu/FoodMenu';
import DrinksMenu from '@/components/menu/DrinksMenu';

export const metadata: Metadata = {
  title: 'Menu — Restaurant Bergamo',
  description: 'Jedálny lístok a nápojový lístok Reštaurácie Bergamo, Humenné.',
};

export default function MenuPage() {
  return (
    <main>
      <FoodMenu />
      <DrinksMenu />
    </main>
  );
}
