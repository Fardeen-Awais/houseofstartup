import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import NextUIProviders from "@/lib/providers/NextUI-Provider";
import { GeistSans } from "geist/font/sans";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} >
      <body className={'dark-bg-background dark-text-primary'}>
        <NextUIProviders>
          <div className="" />
          <Suspense fallback="...">
            {/* <Nav /> */}
          </Suspense>
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 ">
            {children}
          </main>
          {/* <Footer /> */}
          <Analytics />
        </NextUIProviders>
      </body>
    </html>
  );
}
