import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { ThemeProvider } from 'next-themes'
import WhatsAppButton from '@/components/whatsapp-button'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tecnojund',
  description: 'Tecnojund - Automação no tempo certo.',
  robots: 'index, follow',
  authors: { name: 'Giovanni Vicentin', url: 'https://giovannivicentn.com' },
  generator: 'Next.js, React, Tailwind, Node, Vercel, Google Fonts',
  metadataBase: new URL('https://www.tecnojund.com.br'),
  creator: 'Giovanni Vicentin',
  openGraph: {
    type: 'website',
    url: 'https://www.tecnojund.com.br',
    title: 'Tecnojund',
    description: 'Tecnojund - Automação no tempo certo.',
    siteName: 'Tecnojund',
    images: [
      {
        url: '/website-preview.png',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  category: 'Automação Residencial',
  keywords: [
    'automação residencial',
    'IOT para casas',
    'tecnologia doméstica',
    'casa inteligente',
    'smart home',
    'soluções de automação',
    'controle inteligente',
    'automação de casas',
    'casa automatizada',
    'casa conectada',
    'sistema de casa inteligente',
    'casa digital',
    'casa do futuro',
    'internet das coisas',
    'IoT aplicado',
    'segurança residencial inteligente',
    'eficiência energética em casa',
    'Tecnojund',
    'tecnologia em Jundiaí',
    'inovação residencial',
    'sistemas de automação residencial',
    'automação de iluminação',
    'gerenciamento de energia inteligente',
    'home tech',
    'automação de entretenimento doméstico',
    'Jundiaí',
    'Siri',
    'Google Home',
    'Alexa',
    'Apple HomeKit',
    'Google Assistant',
    'Amazon Echo',
    'casa automatizada',
    'casa conectada',
    'casa digital',
    'casa do futuro',
    'São Paulo',
    'Brasil',
    'sistemas inteligentes para casas',
    'soluções IoT para o lar',
    'integração de sistemas residenciais',
    'conforto e conveniência residencial',
    'personalização de casa inteligente',
    'alexa',
    'inteligência artificial',
    'automação empresarial',
    'automação de condomínios',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={(inter.className, 'min-h-screen bg-background')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <WhatsAppButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
