import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Прихожие: создание уютного входа в дом | Мебельщик в Твери и Тверской области',
  description:
    'Создайте уютное приветствие в вашем доме с мебелью для прихожей от Мебельщика в Твери и Тверской области.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
