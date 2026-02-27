import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Restaurant Bergamo — Humenné',
  description: 'Reštaurácia Bergamo — tradičné Slovenské chute s Talianskym nádychom v srdci Humenného.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'history.scrollRestoration="manual";window.scrollTo(0,0);' }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LoadingScreen />
        <CustomCursor />
        <PageTransition>
          <Header />
          {children}
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
