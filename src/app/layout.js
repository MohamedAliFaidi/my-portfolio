import './globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/components/layouut'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mohamed Ali',
  description: 'Personal portfoilio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
        {children}
        </Layout>
        
        </body>
    </html>
  )
}
