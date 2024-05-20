import type { Metadata } from "next";
import { Urbanist, Kanit } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });
const kanit = Kanit({weight: "100", subsets: ['latin']});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
