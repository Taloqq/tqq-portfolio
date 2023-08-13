import { Chakra_Petch, Inter, Roboto } from 'next/font/google';

export const chakra_petch = Chakra_Petch({
  subsets: ['latin'],
  display: 'swap',
  weight: '300'
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: '500'
});

export const robotoCursive = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-cursive'
})