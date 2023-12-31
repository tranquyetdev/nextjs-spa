import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex outline-2 p-5">
          <ul className="flex">
            <li className="p-5">
              <Link href="/">Home</Link>
            </li>
            <li className="p-5">
              <Link href="/about">About</Link>
            </li>
            <li className="p-5">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="p-5">
              <Link href="/chat">Chat</Link>
            </li>
          </ul>
        </nav>
        <div className="p-5 h-screen" id="root">
          {children}
        </div>
        <footer className="flex justify-center p-5">
          <p>Footer © 2023</p>
        </footer>
      </body>
    </html>
  );
}
