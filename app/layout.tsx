import { Footer, Navbar, ToTopArrow } from '@/components';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Cars',
  description: 'Get the best reantal cars deal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <ToTopArrow />
        <Footer />
      </body>
    </html>
  );
}
