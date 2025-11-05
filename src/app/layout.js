import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Foemofy Agency",
  description: "Foemofy adalah creative agency yang membantu bisnis tumbuh melalui desain, branding, dan strategi digital.",
  icons: {
    icon: "/logo.png", // pastikan file ada di public/img/logo.png
  },
  openGraph: {
    title: "Foemofy Agency",
    description: "Creative Agency untuk solusi digital modern.",
    url: "https://foemofy.com",
    siteName: "Foemofy Agency",
    images: [
      {
        url: "/img/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
