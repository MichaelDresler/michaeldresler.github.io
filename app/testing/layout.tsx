import type { Metadata } from "next";
import "../globals.css";
import NavBar from "../components/NavBar";
import { geistSans } from "../fonts";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} salt antialiased `}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
