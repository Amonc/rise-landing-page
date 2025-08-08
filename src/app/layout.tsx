import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RISE - Your AI-Powered Wardrobe Assistant",
  description: "Organize your closet, track your outfits, and get weather-smart suggestions with RISE - the intelligent way to dress better every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
