"use client";

import PhotoContextProvider from "../context/photo-context";
import Nav from "../components/Nav";
import "./globals.css";


export const metadata = {
  title: "Photo Gallery",
  description: "Photo gallery where you can find pictures and like them ",
};

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
