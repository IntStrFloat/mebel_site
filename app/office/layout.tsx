import { TheFooter } from '../_src/components/TheFooter';
import { TheHeader } from '../_src/components/TheHeader';
import { Provider } from '../provider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Офисы',
  description: 'Next App',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
