import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interSans = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} antialiased p-4`}
      >
        {children}
      </body>
    </html>
  );
}
