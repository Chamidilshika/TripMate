import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TripMate Travel Planner",
  description: "Discover destinations, organize trips, manage budgets and plan unforgettable adventures with TripMate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}