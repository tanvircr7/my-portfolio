// app/layout.tsx
import './globals.css'
import Provider from './ThemeProvider'
import { Inter, JetBrains_Mono } from 'next/font/google'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono  = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark' suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.variable} ${mono.variable} font-sans bg-background text-foreground antialiased`}>
        <Provider>
          <SmoothScroll />
          {children}
        </Provider>
      </body>
    </html>
  )
}
