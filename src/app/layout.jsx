import './globals.css'
import { poppins } from './fonts'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArtistProvider } from '@/context/ArtistContext'

export const metadata = {
  title: 'Un "Melomano" Más'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body 
        className={poppins.className}
      >
        <Navbar />
        <ArtistProvider>{children}</ArtistProvider>
        <Footer />
      </body>
    </html>
  )
}
