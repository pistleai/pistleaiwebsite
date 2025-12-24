import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: 'PISTLE AI | Automating the Future',
  description: 'Your Technology Partner for Business Growth. Web Development, Software Solutions, and Intelligent Automation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${montserrat.variable}`}>
      <body className="bg-pistle-navy text-white antialiased selection:bg-pistle-gold selection:text-pistle-navy">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
