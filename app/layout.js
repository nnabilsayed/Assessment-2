"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body className={inter.className}>
          <Navbar></Navbar>
          {children}
        </body>
      </NextUIProvider>
    </html>
  );
}
