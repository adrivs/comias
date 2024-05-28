import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Beef } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comias",
  description: "App to keep track of the restaurants I go with my friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div className="flex w-full">
              <UserButton />
            </div>

          </SignedIn> */}
          <div className="flex overflow-hidden">
            <div className="h-screen px-12 border-r-2 border-slate-500 rounded-t-sm rounded-b-sm pt-8">
              <div className="font-bold flex gap-4">
                <Beef />
                Comias
              </div>
            </div>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}


