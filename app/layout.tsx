"use client";

import { useEffect } from "react";
import { Syne } from "next/font/google";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

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
    <html lang="en" className={syne.variable}>
      <body className="m-0 h-full bg-black p-0">
        {children}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
      </body>
    </html>
  );
}
