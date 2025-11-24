import { md5 } from 'md5js'
import { REFERERKEY } from '@/data/mediaMetaData'

const DEFAULT_TTL_SECONDS = 1200

const buildDirFromUrl = (resourceUrl) => {
  const parsedUrl = new URL(resourceUrl)
  const lastSlashIndex = parsedUrl.pathname.lastIndexOf('/')
  if (lastSlashIndex <= 0) {
    return ''
  }
  return parsedUrl.pathname.slice(0, lastSlashIndex)
}

export const buildProtectedMediaUrl = (resourceUrl, ttlSeconds = DEFAULT_TTL_SECONDS) => {
  if (!resourceUrl) return ''
  try {
    const dir = buildDirFromUrl(resourceUrl)
    const expiryUnix = Math.floor(Date.now() / 1000) + ttlSeconds
    const timestamp = expiryUnix.toString(16)
    const signPayload = `${REFERERKEY}${dir}/${timestamp}`
    const signature = md5(signPayload, 32)
    const parsedUrl = new URL(resourceUrl)
    parsedUrl.searchParams.set('t', timestamp)
    parsedUrl.searchParams.set('sign', signature)
    return parsedUrl.toString()
  } catch (error) {
    console.error('生成防盗链地址失败', error)
    return resourceUrl
  }
}

export const getDefaultTtlSeconds = () => DEFAULT_TTL_SECONDS
