//#region imports

import type { Metadata } from "next";
import { Header } from "../components/shared/Header/Header";
import { Footer } from "../components/shared/Footer";

//#endregion

//#region Metadata

export const metadata: Metadata = {
  title: "Final Explorer",
  description: "A final fantasy explorer where you can find relevant information about the series characters",
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
        <h1 className='text-8xl font-bold underline'> Hola</h1>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

//#endregion