import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
          <div className="container py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-primary">Portfolio</a>
            <nav>
              <ul className="flex space-x-8">
                <li><a href="#about" className="hover:text-primary">About</a></li>
                <li><a href="#projects" className="hover:text-primary">Projects</a></li>
                <li><a href="#skills" className="hover:text-primary">Skills</a></li>
                <li><a href="#contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-secondary text-white py-8 mt-auto">
          <div className="container text-center">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 