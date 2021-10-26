import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListHiphop from '@/layouts/ListHiphop'
export const VIDEOS_PER_PAGE = 10

export async function getStaticProps() {
  const videos = await getAllFilesFrontMatter('hiphop')
  const initialDisplayPosts = videos.slice(0, VIDEOS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(videos.length / VIDEOS_PER_PAGE),
  }
  return { props: { initialDisplayPosts, videos, pagination } }
}
export default function HipHop({ initialDisplayPosts, videos, pagination }) {
  console.log(initialDisplayPosts, videos, pagination, 'ooooooooooooooooooooooo')
  return (
    <>
      <PageSEO title={`${siteMetadata.author}`} description={siteMetadata.description} />
      <ListHiphop
        videos={videos}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="重要的是开始。"
      ></ListHiphop>
    </>
  )
}
