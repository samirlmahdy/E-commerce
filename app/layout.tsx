"use client";

import PhotoContextProvider from "../context/photo-context";
import Nav from "../components/Nav";
import "./globals.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PhotoContextProvider>
      <html lang="en">
        <body>
          <Nav />
          {children}
        </body>
      </html>
    </PhotoContextProvider>
  );
}
