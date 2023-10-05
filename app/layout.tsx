import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from './provider';
import { TheHeader } from './_src/components/TheHeader';
import { TheFooter } from './_src/components/TheFooter';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Мебельная фабрика Мебельщик в Твери и Тверской области | Индивидуальная мебель на заказ',
  description:
    'Добро пожаловать на сайт мебельной фабрики Мебельщик в Твери и Тверской области. Мы создаем индивидуальную мебель на заказ: кухни, детская мебель, шкафы-купе, офисная мебель и торговое оборудование. Уникальный дизайн и качество по доступным ценам. Закажите мебель, которая подчеркнет ваш стиль и комфорт.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
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
