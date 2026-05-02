import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { CustomCursor } from '@/components/ui/CustomCursor'
import './globals.css'

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-family-mono' })

export const metadata: Metadata = {
  title: 'Eason Sun — Portfolio',
  description: 'Robotic design · Software engineering · Product design',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
