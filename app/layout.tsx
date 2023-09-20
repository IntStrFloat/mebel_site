import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from './provider';
import { TheHeader } from './_src/components/TheHeader';
import { TheFooter } from './_src/components/TheFooter';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Next App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <Head>
        <meta name="yandex-verification" content="b8b925e87ecc19b2" />
      </Head>
      <Provider>
        <body className={inter.className}>
          <TheHeader />
          {children}
          <TheFooter />
        </body>
      </Provider>
    </html>
  );
}
