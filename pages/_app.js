import '@/css/tailwind.css'
import '@/css/prism.css'
import 'react-h5-audio-player/lib/styles.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
// import ReactAudioPlayer from 'react-audio-player'
import AudioPlayer from 'react-h5-audio-player'
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      {/* TODO */}
      {/* <AudioPlayer
        autoPlay
        src="https://www.ytmp3.cn/down/75725.mp3"
        onPlay={(e) => console.log('onPlay')}
        // other props here
      /> */}
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>

      {/* <ReactAudioPlayer src="https://www.ytmp3.cn/down/75725.mp3" autoPlay controls /> */}
    </ThemeProvider>
  )
}
