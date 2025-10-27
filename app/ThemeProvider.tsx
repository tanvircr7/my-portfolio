// app/ThemeProvider.tsx
'use client'

import { ThemeProvider } from 'next-themes'

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="dark"         // ← lock to dark
      enableSystem={false}       // ← ignore OS setting
      disableTransitionOnChange  // ← avoid flicker when class applies
    >
      {children}
    </ThemeProvider>
  )
}
