import Link from './Link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      aria-label={`Tag ${text}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
