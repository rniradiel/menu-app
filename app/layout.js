import './globals.css';

export const metadata = {
  title: 'Menu',
  description: 'Menu project created by Next',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
