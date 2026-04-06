import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "As I've Written | Hanashiro Yuriku",
  description: "Dionisius Geovanni Caesario's personal profile website, showcasing projects, skills, and contact information in a unique terminal-inspired design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}