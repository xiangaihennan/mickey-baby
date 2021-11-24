import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-4 md:w-1/2 md">
    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <video className="h-77 w-123" src={imgSrc}>
            <track src={imgSrc} srcLang="zh" default kind="captions" label="欢迎你"></track>
          </video>
        </Link>
      ) : (
        <video className="h-77 w-123" src={imgSrc}>
          <track src={imgSrc} srcLang="zh" default kind="captions" label="欢迎你"></track>
        </video>
        // <Image
        //   alt={title}
        //   src={imgSrc}
        //   className="object-cover object-center lg:h-48 md:h-36"
        //   width={544}
        //   height={306}
        // />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
