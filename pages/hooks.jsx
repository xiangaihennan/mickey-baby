import { useToggle } from '@/hooks/useToggle/index.js'
import { useCallback, useEffect, useMemo, useRef } from 'react'
export default function Hooks() {
  const [state, { toggle, setLeft, setRight }] = useToggle('123', '456')
  console.log('ahooks')
  const ref = useRef()
  const hooksTest = () => {
    toggle()
  }
  /**
   * 缓存的是值 依赖不变就不会再次执行 即使在jsx渲染函数中调用也不会执行
   * 类似vue computed  且useMemo
   *
   */
  const ff = useMemo((params) => {
    console.log(`useMemo`)
    return '666666666666666'
  }, [])
  // 只缓存函数 如果在jsx渲染模版中调用 依然会执行

  useEffect((params) => {
    const bb = (params) => {
      console.log(`useCallback`)
    }
    console.log(`useEffect`)
    console.log(ref, '999999999999999999999999')
    bb()
  }, [])
  return (
    <div>
      <button onClick={hooksTest}>222222222222222{state}</button>
      <div ref={ref}>{ff}</div>
      {/* <div
        onClick={(params) => {
          console.log(ref, ref.current.innerHTML, '99999999999999999999')
        }}
      >
        hhhhhhhhhhh
      </div> */}
    </div>
  )
}
