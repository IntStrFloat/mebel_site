import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Офисная мебель для вашего бизнеса | Мебельщик в Твери и Тверской области',
  description:
    'Офисная мебель от Мебельщика в Твери и Тверской области. Улучшите рабочее пространство с нашими современными решениями для офисов.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
