import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import HiphopPagination from '@/components/HiphopPagination'
import formatDate from '@/lib/utils/formatDate'
import VideoCard from '@/components/VideoCard'

export default function ListLayout({ videos, title, initialDisplayPosts = [], pagination }) {
  console.log(videos, initialDisplayPosts, '------------')
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            温故而知新
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">坚持基本功！</p>
        </div>
        <div className="container py-12">
          {/* /static/video/firstHiphop.mp4 */}
          <div className="flex flex-wrap -m-4">
            {initialDisplayPosts.map((d) => (
              <VideoCard
                key={d.date}
                title={d.title}
                description={d.description}
                imgSrc={d.mediaLink}
                href={`/hiphop/${d.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && (
        <HiphopPagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
