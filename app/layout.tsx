import type { Metadata } from 'next';
import { Gloock, Instrument_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const display = Gloock({ weight: '400', subsets: ['latin'], variable: '--font-display' });
const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Onyx Atelier — natural onyx drinkware (demo)',
  description: 'Demo website for an onyx drinkware brand in Albany and Saratoga Springs, NY.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="demo-bar" role="note">
          Demo prepared by Ibrahim Digital Solutions. Product details are sample content until you confirm them.
        </div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
