import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('hiphop')
  console.log(posts, '[[[[[[[[[[[[[[[[[[')
  return {
    paths: posts.map((p) => ({
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
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('hiphop', params.slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/feed.xml', rss)

  return { props: { post, authorDetails, prev, next } }
}

export default function PostPage({ posts, initialDisplayPosts, pagination }) {
  // const router = useRouter()
  return (
    <>
      <div className="w-24 mb-8">巴拉巴拉</div>
      {/* <video
        controls
        src="http://1259397000.vod2.myqcloud.com/68dd9606vodcq1259397000/6ba371758602268010965231050/NHLSGMeaWiMA.mp4"
      >
        <track kind="captions" src="subs_chi.srt" srcLang="zh" label="Chinese"></track>
      </video> */}
      {/* <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      /> */}
    </>
  )
}