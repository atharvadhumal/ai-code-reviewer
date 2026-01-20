import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeSight Ai",
  description: "AI powered code reviwer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-900 text-gray-200 font-sans hide-scrollbar">
        {children}
      </body>
    </html>
  );
}
