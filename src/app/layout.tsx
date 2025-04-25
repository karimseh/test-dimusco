import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Best Digital Sheet Music & Scores Download Online App',
  description:
    'Get the best sheet music collection at dimusco, the ultimate online destination for digital music scores. Download sheet music online with the best sheet music apps.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
