import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";
import AuthProvider from "@/hooks/AuthProvider";
import "../globals.css";
import "@uploadthing/react/styles.css";
import Header from "@/components/shared/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { User } from "@/types/userType";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KSB Voting App",
  description: "A voting system for the KSB",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = (await getServerSession(authOptions)) as {
    user: User;
  };
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Header role={user.role} />
            {children}
          </Providers>
        </body>
      </html>
    </AuthProvider>
  );
}
