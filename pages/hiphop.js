import siteMetadata from '@/data/siteMetadata'
import hiphops from '@/data/hiphopData'
import VideoCard from '@/components/VideoCard'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('hiphop')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }
  return { props: { initialDisplayPosts, posts, pagination } }
}
export default function HipHop() {
  return (
    <>
      <PageSEO title={`${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            hiphop～
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">happy-dance</p>
        </div>
        <div className="container py-12">
          {/* /static/video/firstHiphop.mp4 */}
          <div className="flex flex-wrap -m-4">
            {hiphops.map((d) => (
              <VideoCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
