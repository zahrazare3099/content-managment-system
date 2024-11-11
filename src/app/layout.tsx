import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "./_components/header";
import { Sidebar } from "./_components/sidebar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CMS App",
  description: "description for CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`min-h-screen flex bg-slate-200 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
