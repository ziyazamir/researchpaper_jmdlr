import { Inter } from "next/font/google";
import "./globals.css";
import './assets/css/style.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jmdlr",
  description: "journal of multi-disciplinary legal research",
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>

        {children}</body>
    </html>
  );
}
