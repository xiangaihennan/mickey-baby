import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListHiphop from '@/layouts/ListHiphop'
import { VIDEOS_PER_PAGE } from '../../hiphop'

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter('hiphop')
  const totalPages = Math.ceil(totalPosts.length / VIDEOS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context
  const videos = await getAllFilesFrontMatter('hiphop')
  const pageNumber = parseInt(page)
  const initialDisplayPosts = videos.slice(
    VIDEOS_PER_PAGE * (pageNumber - 1),
    VIDEOS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(videos.length / VIDEOS_PER_PAGE),
  }

  return {
    props: {
      videos,
      initialDisplayPosts,
      pagination,
    },
  }
}
// 列表页面
export default function PostPage({ videos, initialDisplayPosts, pagination }) {
  // console.log(videos,initialDisplayPosts,'888888888888888123123');
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListHiphop
        videos={videos}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="HipHop"
      />
    </>
  )
}
