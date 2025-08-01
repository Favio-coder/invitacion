import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Richard & Elva",
  description: "¡Estás invitado a nuestra boda!",
  icons: {
    icon: "/diamond-ring.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
