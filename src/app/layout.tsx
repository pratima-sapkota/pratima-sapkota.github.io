import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MatrixRain } from '@/components/effects/MatrixRain';
import { Scanlines } from '@/components/effects/Scanlines';

export const metadata: Metadata = {
  title: 'Pratima Sapkota | Software Engineer',
  description: 'Software Engineer, Security Enthusiast, and Entrepreneur. Building scalable systems by day, hunting flags by night.',
  keywords: ['software engineer', 'full-stack developer', 'CTF', 'security', 'React', 'Python', 'AI/ML'],
  authors: [{ name: 'Pratima Sapkota' }],
  openGraph: {
    title: 'Pratima Sapkota | Software Engineer',
    description: 'Software Engineer, Security Enthusiast, and Entrepreneur',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratima Sapkota | Software Engineer',
    description: 'Software Engineer, Security Enthusiast, and Entrepreneur',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-terminal-bg text-text-primary font-mono antialiased">
        <MatrixRain />
        <Scanlines />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
