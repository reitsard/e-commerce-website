import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'World Balance PH - Demo',
  description: 'demo site only',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <NavBar />
      </body>
    </html>
  )
}
