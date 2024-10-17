//#region imports

import type { Metadata } from "next";
import { Header } from "../components/shared/Header/Header";
import { Footer } from "../components/shared/Footer";
import '../sass/global.scss'

//#endregion

//#region Metadata

export const metadata: Metadata = {
  title: "Final Explorer",
  description: "A final fantasy explorer where you can find relevant information about the serie's characters",
};

//#endregion

//#region Component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

//#endregion