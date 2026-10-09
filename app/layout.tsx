import type { Metadata } from 'next';
import { Bodoni_Moda, Jost } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import Reveal from '@/components/Reveal';

const display = Bodoni_Moda({ subsets: ['latin'], variable: '--font-display', style: ['normal', 'italic'] });
const body = Jost({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Onyx Atelier | Natural Onyx Drinkware (Demo)',
  description: 'Demo store for natural onyx wine glasses, chillers, shot sets and mugs in Albany and Saratoga Springs, NY.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
                  <div className="announce">Local delivery across Albany and Saratoga Springs. Gift-ready on request.</div>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ChatWidget />
          <Reveal />
      </body>
    </html>
  );
}
