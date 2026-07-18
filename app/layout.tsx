import './globals.css';
import './mobile.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Lima Lopes e Diógenes Advogados | Parauapebas',
  description: 'Sociedade de advogados com atuação cível, empresarial e de família em Parauapebas, Pará.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
