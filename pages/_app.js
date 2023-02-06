import '@/styles/globals.css'
import DarkModeProvider from '@/context/dark_mode'
import Header from '@/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Header />
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}
