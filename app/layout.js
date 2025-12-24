import { Inter, Montserrat } from 'next/font/google'
import Script from 'next/script'
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K39FJ3F9NL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-K39FJ3F9NL');
          `}
        </Script>
      </head>
      <body className="bg-pistle-navy text-white antialiased selection:bg-pistle-gold selection:text-pistle-navy">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
