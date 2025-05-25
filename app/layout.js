import './globals.css';

export const metadata = {
  title: 'Sistem Login',
  description: 'Simple Auth dengan Next.js dan Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
