import { useCallback } from 'react'

export const useThrottle = (fn, time = 1000) => {
  let preTime
  function throttle() {
    let curDate = new Date().getTime()
    if (!preTime) preTime = curDate
    const ctx = this
    const args = arguments
    const diffTimer = Math.abs(preTime - curDate)
    if (diffTimer > time) {
      preTime = curDate
      fn.apply(ctx, args)
    } else {
      console.log(`时间没到`)
    }
  }
  return useCallback(throttle, [])
}
