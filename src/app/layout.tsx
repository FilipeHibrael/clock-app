import type { Metadata } from 'next';
import './globals.css';
import { typeInter } from '@/functions/fonts';

export const metadata: Metadata = {
  title: 'Clock App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: `${typeInter.style.fontFamily}` }}>
        {children}
      </body>
    </html>
  );
}
