import './globals.css';
import Providers from './components/providers/page.js';

export const metadata = {
  title: 'Menu',
  description: 'Menu project created by Next',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
