import './globals.css'

import { NextUIProviders } from '@/components/providers/NextUi-provider'

import type { Metadata } from 'next'

import { GeistSans } from 'geist/font/sans';
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/ToastProvider';



export const metadata: Metadata = {
  title: 'House of Dev | Solving your Business Problems',
  description: 'Make your web application with us for your buisness',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning>
        <body className={`${GeistSans.className} dark:prose-headings:black_text_gradient prose-h1:scroll-m-20 prose-h1:text-5xl prose-h1:lg:text-5xl prose-h1:font-extrabold prose-h1:tracking-tight prose-h1:xl:text-6xl prose-h2:mt-10 prose-h2:scroll-m-20 prose-h2:pb-2 prose-h2:text-4xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:transition-colors prose-h2:first:mt-0 prose-blockquote:mt-6 prose-blockquote:border-l-2 prose-blockquote:pl-6 prose-blockquote:italic prose-h3:text-[28px] prose-h3:font-bold prose-h3:tracking-tight prose-ul:my-6 prose-ul:ml-6 prose-ul:list-disc prose-ul:[&>li]:mt-2 prose-h4:scroll-m-20 prose-h4:text-xl prose-h4:font-semibold prose-h4:tracking-tight`}>
          <NextUIProviders>
            <ToastProvider />
            {children}
          </NextUIProviders>
        </body>
      </html>
    </ClerkProvider>
  )
}
