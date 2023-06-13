import './globals.css'
import { Roboto_Mono, Roboto_Slab } from 'next/font/google'

const text = Roboto_Mono({ subsets: ['latin'] })
const title = Roboto_Slab({ subsets: ['latin'] })

export const metadata = {
  title: 'CMDEV - Portfolio',
  description: 'Hi! My name is Carlos Morais and this is my portfolio, hope you like it!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={text.className}>{children}</body>
    </html>
  )
}
