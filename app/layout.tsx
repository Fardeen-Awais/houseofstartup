import './globals.css'

import { ThemeProvider } from '@/providers/theme-provider'
import { NextUIProviders } from '@/providers/NextUi-provider'

import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alfarnex Software House',
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
        <body className={`${inter.className} dark:prose-headings:black_text_gradient prose-h1:scroll-m-20 prose-h1:text-4xl prose-h1:font-extrabold prose-h1:tracking-tight prose-h1:lg:text-5xl prose-p:leading-7 prose-p:[&:not(:first-child)]:mt-1 dark:prose-p:text-gray-300 prose-h2:mt-10 prose-h2:scroll-m-20 prose-h2:pb-2 prose-h2:text-4xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:transition-colors prose-h2:first:mt-0 prose-blockquote:mt-6 prose-blockquote:border-l-2 prose-blockquote:pl-6 prose-blockquote:italic prose-h3:mt-8 prose-h3:scroll-m-20 prose-h3:text-[28px] prose-h3:font-bold prose-h3:tracking-tight prose-ul:my-6 prose-ul:ml-6 prose-ul:list-disc prose-ul:[&>li]:mt-2 prose-h4:scroll-m-20 prose-h4:text-xl prose-h4:font-semibold prose-h4:tracking-tight`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextUIProviders>
                {children}
            </NextUIProviders>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
