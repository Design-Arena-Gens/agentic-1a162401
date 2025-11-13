import './globals.css';
import { Noto_Sans_Bengali } from 'next/font/google';

const noto = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-bengali'
});

export const metadata = {
  title: 'স্বাগতম | হ্যালো',
  description: 'বাংলা শুভেচ্ছা জানানোর জন্য একটি সরল অভিজ্ঞতা।'
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={noto.variable}>
      <body className={noto.className}>{children}</body>
    </html>
  );
}
