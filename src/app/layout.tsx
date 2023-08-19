import './globals.css'
import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

const chakra_petch = Chakra_Petch({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: '(1) Uusi kehittäjä lähelläsi!',
  description: 'Portfolio of Antte Alatalo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>title</title>
      </Head>
      <body className={chakra_petch.className}>
        {children}
        <Analytics />  
      </body>
    </html>
  )
}
