import {
  useLockFn,
  useToggle,
  useEventEmitter,
  useReactive,
  useUpdate,
  useDebounce,
  useThrottle,
} from '@/hooks/index'

import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
// function mockApiRequest() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, 2000)
//   })
// }
export default function Hooks() {
  const [count, setCount] = useState(0)
  const fn = useThrottle((...args) => {
    const [f] = args
    console.log(f, 11111111111)
  })
  const state = useReactive({
    num: 0,
    kk: {
      ff: 1,
    },
  })
  const submit = (params) => {
    state.num++
    fn(123)
  }
  return (
    <>
      <div className="box-content h-32 w-32 p-4 border-4 bg-indigo-800"></div>
      <p>
        Submit count: {count}---
        {state.num}
      </p>
      <button onClick={submit}>Submit</button>
    </>
  )
}
