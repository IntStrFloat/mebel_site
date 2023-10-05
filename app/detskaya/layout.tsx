import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Детская мебель от профессионалов | Мебельщик в Твери и Тверской области',
  description:
    'Детская мебель от Мебельщика в Твери и Тверской области. Мы предлагаем безопасные и креативные решения для детских комнат, чтобы ваши дети чувствовали себя уютно.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
