import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TourTrail",
  description:
    "A travelling website where users can rent out their place or book a place to stay in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
          <Modal isOpen/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
