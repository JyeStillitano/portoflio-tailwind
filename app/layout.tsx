"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const currentHost = window.location.hostname;

    // Check if the user is on jyestillitano.github.io
    if (currentHost === "jyestillitano.github.io") {
      // Redirect to jyes.dev
      window.location.href = "https://jyes.dev";
    }
  });

  return (
    <html lang="en" className="">
      <body className="m-0 h-full bg-background p-0">{children}</body>
    </html>
  );
}
