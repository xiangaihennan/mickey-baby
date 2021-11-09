// import '@/css/tailwind.css'
import 'windi.css'
import '@/css/prism.css'
import 'react-h5-audio-player/lib/styles.css'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Script src="/static/js/preload.js" strategy="beforeInteractive" />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
