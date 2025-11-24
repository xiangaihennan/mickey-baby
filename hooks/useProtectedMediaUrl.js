import { useEffect, useState } from 'react'
import { buildProtectedMediaUrl, getDefaultTtlSeconds } from '@/lib/protectedMedia'

const useProtectedMediaUrl = (rawUrl, ttlSeconds = getDefaultTtlSeconds()) => {
  const [protectedUrl, setProtectedUrl] = useState('')

  useEffect(() => {
    if (!rawUrl) {
      setProtectedUrl('')
      return
    }
    setProtectedUrl(buildProtectedMediaUrl(rawUrl, ttlSeconds))
  }, [rawUrl, ttlSeconds])

  return protectedUrl
}

export default useProtectedMediaUrl
