import { TheFooter } from '../_src/components/TheFooter';
import { TheHeader } from '../_src/components/TheHeader';
import { Provider } from '../provider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Детская мебель | Мебельщик тверь',
  description: 'Детская мебель | Мебельщик тверь',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
