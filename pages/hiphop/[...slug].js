import fs from 'fs'
import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { useRouter } from 'next/router'
const DEFAULT_LAYOUT = 'HiphopLayout'

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
  // console.log(params, '888892222222222222222222')
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
// 详情页面
export default function HiphopPage({ videos, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = videos
  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
