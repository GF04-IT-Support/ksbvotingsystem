import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";
import AuthProvider from "@/hooks/AuthProvider";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KSB Voting App",
  description: "A voting system for the KSB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </AuthProvider>
  );
}
