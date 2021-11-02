import siteMetadata from '@/data/siteMetadata'
import lifeData from '@/data/lifeData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { useReactive } from 'ahooks'
// import { className } from "classnames";

export default function Projects() {
  return (
    <>
      <PageSEO title={`${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            照片墙
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            自己永远是自己的主角。（页面待装修！！！）
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {lifeData.map((d, idx) => (
              <Card
                key={idx}
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
