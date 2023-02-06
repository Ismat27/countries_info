import '@/styles/globals.css'
import DarkModeProvider from '@/context/dark_mode'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  )
}
