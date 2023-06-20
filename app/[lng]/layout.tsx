import { Header } from '@/components'
import '../globals.css'
import { Roboto_Mono, Roboto_Slab } from 'next/font/google'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

const text = Roboto_Mono({ subsets: ['latin'] })
const title = Roboto_Slab({ subsets: ['latin'] })

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata = {
  title: 'CMDEV - Portfolio',
  description: 'Hi! My name is Carlos Morais and this is my portfolio, hope you like it!',
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={text.className}>
        <Header params={{ lng }} />
        {children}
      </body>
    </html>
  )
}
