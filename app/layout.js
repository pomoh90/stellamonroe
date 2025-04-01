// app/layout.js
import '../styles/globals.css';
import { Roboto } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Stella Monroe | Elite Escorts',
  description: 'Exclusive Escort Service ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
