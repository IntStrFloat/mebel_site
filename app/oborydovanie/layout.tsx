import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Торговое оборудование для эффективного ритейла | Мебельщик в Твери и Тверской области',
  description:
    'Торговое оборудование для эффективного ритейла в Твери и Тверской области от Мебельщика. Обеспечьте свой магазин высококачественной мебелью для торговли.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
