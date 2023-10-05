import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мебель для ванных комнат от производителя | Мебельщик в Твери и Тверской области',
  description:
    'Мебель для ванных комнат от производителя в Твери и Тверской области. Отражайте свой стиль и удобство в каждой детали вашей ванной комнаты.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
