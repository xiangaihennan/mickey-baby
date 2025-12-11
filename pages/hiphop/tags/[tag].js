import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import ListHiphop from '@/layouts/ListHiphop'

export async function getStaticPaths() {
  const tags = await getAllTags('hiphop')
  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const videos = await getAllFilesFrontMatter('hiphop')
  const filteredVideos = videos.filter((video) =>
    video.tags?.map((tag) => kebabCase(tag)).includes(params.tag)
  )

  return {
    props: {
      videos: filteredVideos,
      tag: params.tag,
    },
  }
}

export default function HipHopTagPage({ videos, tag }) {
  const title = `标签 · ${tag.split(' ').join('-')}`
  return (
    <>
      <TagSEO title={`${tag} · ${siteMetadata.author}`} description={`HipHop 视频中带有 ${tag} 标签的合集`} />
      <ListHiphop videos={videos} initialDisplayPosts={videos} pagination={null} title={title} />
    </>
  )
}
