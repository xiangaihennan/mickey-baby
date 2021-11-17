import { useMemo, useRef } from 'react'

// 专治帕金森～
export const useLockFn = (fn) => {
  const isLock = useRef(false)
  return useMemo(
    () => async (...args) => {
      if (isLock.current) return
      isLock.current = true
      try {
        const ret = await fn(...args)
        isLock.current = false
      } catch (error) {
        isLock.current = false
        throw error
      }
    },
    [fn]
  )
}
