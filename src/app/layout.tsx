import './globals.css'
import type { Metadata } from 'next'
import { Bebas_Neue, Chakra_Petch, Inter, Raleway } from 'next/font/google'

// const inter = Raleway({ subsets: ['latin'] })
const chakra_petch = Chakra_Petch({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'Tqq Portfolio',
  description: 'Portfolio of Antte Alatalo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={chakra_petch.className}>{children}</body>
    </html>
  )
}
