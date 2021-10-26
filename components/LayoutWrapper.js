import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/beer.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import AudioPlayer from 'react-h5-audio-player'

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
          }}
          // className={`bg-gradient-to-r from-teal to-blue-400`}
          src="https://m804.music.126.net/20211026234816/2e0fd0a1a11d0493adcad7278c6e8959/jdyyaac/0e59/055e/045f/93e532218124ce8ed61a3565f061a5f8.m4a?authSecret=0000017cbd32ce820b7b0aa4637a0583"
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
