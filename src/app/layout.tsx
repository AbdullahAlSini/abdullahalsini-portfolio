import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Al Sini | Product-minded developer",
  description: "Bilingual portfolio of Abdullah Al Sini, a developer crafting thoughtful digital experiences."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
