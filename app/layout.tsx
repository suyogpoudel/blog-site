import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/NavBar";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "blogs | minimal blogs website",
  description:
    "blogs. is a minimal blogs website built using Next.js and styled using TailwindCSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.className} ${poppins.className} dark:bg-neutral-900 dark:text-neutral-100 bg-neutral-100 text-neutral-900 antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <NavBar />
          <main className="lg:w-[60%] mx-auto w-[80%] py-25">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
