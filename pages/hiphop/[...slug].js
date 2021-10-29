import fs from 'fs'
import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const videos = getFiles('hiphop')
  return {
    paths: videos.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log(params, '888892222222222222222222')
  const allPosts = await getAllFilesFrontMatter('hiphop')
  const postIndex = allPosts.findIndex(
    (videos) => formatSlug(videos.slug) === params.slug.join('/')
  )
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const videos = await getFileBySlug('hiphop', params.slug.join('/'))
  const authorList = videos.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/feed.xml', rss)

  return { props: { videos, authorDetails, prev, next } }
}

export default function HiphopPage({ videos, initialDisplayPosts, pagination }) {
  // TODO --------------
  const { frontMatter } = videos
  console.log(videos, initialDisplayPosts, pagination, '/////////////////')
  // const router = useRouter()
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ScrollTopAndComment />
      <div className="w-24 mb-8">巴拉巴拉</div>
      <video controls src={frontMatter.imgSrc}>
        <track kind="captions" src="subs_chi.srt" srcLang="zh" label="Chinese"></track>
      </video>
      {/* TODO Comments */}
    </>
  )
}
