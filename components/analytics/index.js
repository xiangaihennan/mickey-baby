import GA from './GoogleAnalytics'
import Plausible from './Plausible'
import SimpleAnalytics from './SimpleAnalytics'
import BaiduAnalytics from './SimpleAnalytics'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  console.log(siteMetadata.analytics.baiduAnalytics)
  return (
    <>
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}
      {isProduction && siteMetadata.analytics.baiduAnalytics && <BaiduAnalytics />}
    </>
  )
}

export default Analytics
