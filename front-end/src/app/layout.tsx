import type { Metadata } from "next";
import { EB_Garamond, Poppins } from "next/font/google";

// Components
import Header from "@/components/header";

// Styles
import "../styles/global.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Old School",
  description: "Site description.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
