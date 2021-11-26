import { useCallback } from 'react'

export function useDebounce(fn, delay = 1000) {
  let timer = null
  function reBack() {
    const ctx = this
    const args = arguments
    clearInterval(timer)
    timer = setTimeout(() => {
      fn.apply(ctx, args)
    }, delay)
  }

  return useCallback(reBack, [fn])
}
