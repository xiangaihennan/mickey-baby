import { useLockFn, useToggle, useEventEmitter } from '@/hooks/index'

import { useReactive } from 'ahooks'
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
  // const [state, { toggle, setLeft, setRight }] = useToggle('123', '456')
  // const submit = useLockFn(async (event) => {
  //   await mockApiRequest()
  //   setCount((val) => val + 1)
  // })
  const submit = (params) => {}
  return (
    <>
      <p>Submit count: {count}</p>
      <button onClick={submit}>Submit</button>
    </>
  )
}
