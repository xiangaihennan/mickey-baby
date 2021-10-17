import siteMetadata from '@/data/siteMetadata'
import hiphops from '@/data/hiphopData'
import VideoCard from '@/components/VideoCard'
import { PageSEO } from '@/components/SEO'

export default function HipHop() {
  return (
    <>
      <PageSEO title={`${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            hiphop～
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">舞起来～</p>
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
