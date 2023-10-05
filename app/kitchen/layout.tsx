import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кухни на заказ в Твери и Тверской области | Мебельщик',
  description:
    'Индивидуальные кухни на заказ в Твери и Тверской области от мебельной фабрики Мебельщик. Создайте свой уникальный кухонный интерьер с нами и наслаждайтесь комфортом и стилем.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
