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
import { useCallback, useEffect, useMemo, useState } from 'react'
import { md5 } from 'md5js'

const LayoutWrapper = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [audioPlayerSrc, setAudioPlayerSrc] = useState('')
  const currentTrack = musicList[currentIndex]

  // 生成防盗链的url
  const getUrl = (url) => {
    const reg = /(?<=(.+\.com))(.+)(?=(\/.+\.*))/g
    const [dir] = url.match(reg)
    // 格式 key+dir+time
    const unixTime = Math.floor(Date.now() / 1000) + 1200
    const timestamp = unixTime.toString(16)
    const sign = `${REFERERKEY}${dir}/${timestamp}`
    const signMD5 = md5(sign, 32)
    const urlParams = `?t=${timestamp}&sign=${signMD5}`
    const result = `${url}${urlParams}`
    return result
  }

  const getRandomIndex = useCallback((excludeIndex) => {
    if (musicList.length <= 1) return excludeIndex
    let nextIndex = excludeIndex
    while (nextIndex === excludeIndex) {
      nextIndex = Math.floor(Math.random() * musicList.length)
    }
    return nextIndex
  }, [])

  const handleSelectTrack = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  const handlePlayNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % musicList.length)
  }, [])

  const handlePlayPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + musicList.length) % musicList.length)
  }, [])

  const handlePlayRandom = useCallback(() => {
    setCurrentIndex((prev) => getRandomIndex(prev))
  }, [getRandomIndex])

  const playlistSelector = (
    <select
      key="playlist-selector"
      className="rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800"
      value={currentIndex}
      onChange={(e) => handleSelectTrack(Number(e.target.value))}
    >
      {musicList.map((track, index) => (
        <option key={track.name} value={index}>
          {track.name}
        </option>
      ))}
    </select>
  )

  const customControls = [
    <span key="current-track" className="text-sm text-gray-700 dark:text-gray-200">
      正在播放：{currentTrack?.name ?? '-'}
    </span>,
    <button
      key="prev-btn"
      onClick={handlePlayPrev}
      className="rounded border border-gray-300 px-2 py-1 text-sm text-gray-700 transition hover:border-primary-400 hover:text-primary-500 dark:border-gray-600 dark:text-gray-200 dark:hover:border-primary-400"
      type="button"
    >
      上一首
    </button>,
    <button
      key="next-btn"
      onClick={handlePlayNext}
      className="rounded border border-gray-300 px-2 py-1 text-sm text-gray-700 transition hover:border-primary-400 hover:text-primary-500 dark:border-gray-600 dark:text-gray-200 dark:hover:border-primary-400"
      type="button"
    >
      下一首
    </button>,
    <button
      key="random-btn"
      onClick={handlePlayRandom}
      className="rounded border border-gray-300 px-2 py-1 text-sm text-gray-700 transition hover:border-primary-400 hover:text-primary-500 dark:border-gray-600 dark:text-gray-200 dark:hover:border-primary-400"
      type="button"
    >
      随机
    </button>,
    playlistSelector,
  ]

  const viedeoConfig = {
    autoPlay: true,
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
    customAdditionalControls: customControls,
    loop: false,
    showSkipControls: true,
    className: `bg-transparent`,
    onEnded: () => {
      handlePlayNext()
    },
    onClickPrevious: () => {
      handlePlayPrev()
    },
    onClickNext: () => {
      handlePlayNext()
    },
  }
  useEffect(
    (params) => {
      if (currentTrack?.url) {
        setAudioPlayerSrc(getUrl(currentTrack.url))
      }
    },
    [currentIndex, currentTrack?.url]
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
        <AudioPlayer {...viedeoConfig} src={audioPlayerSrc}></AudioPlayer>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
