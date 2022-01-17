const siteMetadata = {
  title: 'locker--奇',
  author: 'locker--奇',
  keywords: '刘泽奇，刘泽奇的博客，泽奇blog，快乐',
  headerTitle: 'keep happy',
  description: '不以物喜，不以己悲。',
  language: 'cmn-Hans-CN',
  siteUrl: 'https://mickey-baby.vercel.app/',
  siteRepo: 'https://github.com/xiangaihennan/mickey-baby',
  // siteLogo: '/static/images/beer.svg',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: '405059000@qq.com',
  // github: 'https://github.com',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  // linkedin: 'https://www.linkedin.com',
  qq: `//message/?uin=405059000&Site=&Menu-=yes`,
  locale: 'zh-cn',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: null && 'mickey-baby.vercel.app', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
    baiduAnalytics: `mickey-baby.vercel.app`,
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: `xiangaihennan/mickey-baby` || process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: `R_kgDOGHRtlg` || process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: `Ideas` || process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: `DIC_kwDOGHRtls4B_og3` || process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      // category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      // categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
