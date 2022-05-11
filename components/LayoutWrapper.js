import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/beer.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import { musicList, REFERERKEY } from '@/data/mediaMetaData'
import { useEffect, useMemo, useState } from 'react'
import { md5 } from 'md5js'
const randomList = musicList.sort(() => Math.random() - 0.5)

const LayoutWrapper = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [audioPlayerSrc, setAudioPlayerSrc] = useState('')
  // 生成防盗链的url
  const getUrl = (url) => {
    const reg = /(?<=(.+\.com))(.+)(?=(\/.+\.*))/g
    const dir = url.match(reg)[0]
    // 格式 key+dir+time
    const unixTime = Math.floor(Date.now() / 1000) + 1200
    const timestamp = unixTime.toString(16)
    const sign = `${REFERERKEY}${dir}/${timestamp}`
    const signMD5 = md5(sign, 32)
    const urlParams = `?t=${timestamp}&sign=${signMD5}`
    const result = `${url}${urlParams}`
    return result
  }
  const viedeoConfig = {
    autoPlay: false,
    layout: 'horizontal',
    style: {
      border: 0,
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
    customControlsSection: [
      // <div key={musicList[currentIndex]?.name}>
      //   {musicList[currentIndex]?.name}&nbsp;&nbsp;&nbsp;
      // </div>,
      // RHAP_UI.ADDITIONAL_CONTROLS,
      RHAP_UI.MAIN_CONTROLS,
      // RHAP_UI.VOLUME_CONTROLS,
    ],
    loop: true,
    showSkipControls: true,
    className: `bg-transparent`,
    onPlay: (e) => {
      // console.log(currentIndex, e, 'preIndex')
    },
    onClickPrevious: (ev) => {
      setCurrentIndex((x) => (x - 1 + randomList.length) % randomList.length)
    },
    onClickNext: (ev) => {
      setCurrentIndex((x) => (x + 1) % randomList.length)
    },
  }
  useEffect(
    (params) => {
      setAudioPlayerSrc(getUrl(randomList[currentIndex]?.url))
    },
    [currentIndex]
  )
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                {/* <div className="mr-3">
                  <Logo />
                </div> */}
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {/* bg-gradient-to-r from-teal to-blue-400 */}
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        {/* <div className="hidden"> */}
        <AudioPlayer {...viedeoConfig} src={audioPlayerSrc}></AudioPlayer>
        {/* </div> */}
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
