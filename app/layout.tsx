import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Serena Blake - Licensed Clinical Psychologist | Los Angeles, CA',
  description: 'Compassionate, evidence-based therapy for anxiety, relationships, and trauma recovery. Dr. Serena Blake, PsyD offers both in-person and virtual sessions in Los Angeles.',
  keywords: 'therapist, psychologist, anxiety therapy, relationship counseling, trauma recovery, Los Angeles therapy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}