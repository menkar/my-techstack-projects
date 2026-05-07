import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Skills Manager",
  description: "Organize and explore agent skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} dark min-h-screen scroll-smooth`}
    >
      {/*
        data-theme="dark"  → activates DaisyUI dark CSS token set
        class="dark"       → activates Tailwind dark: variant (configured in globals.css)
        bg-zinc-950        → explicit Tailwind dark colour so body is always dark,
                             even if DaisyUI token loading is delayed in dev
      */}
      <body className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-100 antialiased">
        <Header />
        <main className="flex min-h-0 flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
