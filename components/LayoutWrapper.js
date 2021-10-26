import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/beer.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import AudioPlayer from 'react-h5-audio-player'
const musicList = [
  `http://1259397000.vod2.myqcloud.com/68dd9606vodcq1259397000/ada0b7bb8602268011025581393/f0.m4a`,
]
const LayoutWrapper = ({ children }) => {
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
        {/* <div> */}
        <AudioPlayer
          autoPlay={true}
          style={{
            border: 0,
            boxShadow: 'none',
            backgroundColor: 'transparent',
          }}
          className={`bg-transparent`}
          src={musicList[0]}
          onPlay={(e) => console.log('onPlay', e)}
          // other props here
        />
        {/* </div> */}
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
