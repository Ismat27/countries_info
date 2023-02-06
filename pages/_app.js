import '@/styles/globals.css'
import DarkModeProvider from '@/context/dark_mode'

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}
