import { useLockFn, useToggle, useEventEmitter, useReactive, useUpdate } from '@/hooks/index'

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
  const state = useReactive({
    num: 0,
    kk: {
      ff: 1,
    },
  })

  const submit = (params) => {
    state.num++
  }
  return (
    <>
      <p>
        Submit count: {count}---
        {state.kk.ff}
      </p>
      <button onClick={submit}>Submit</button>
    </>
  )
}
