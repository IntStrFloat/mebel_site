import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Шкафы-купе по индивидуальному заказу | Мебельщик в Твери и Тверской области',
  description:
    'Индивидуальные шкафы-купе на заказ в Твери и Тверской области от Мебельщика. Максимальная функциональность и стиль в каждом шкафу.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
