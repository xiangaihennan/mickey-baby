import { useToggle } from '@/hooks/useToggle/index.js'
import { useCallback, useEffect, useMemo, useRef } from 'react'
export default function Hooks() {
  const [state, { toggle, setLeft, setRight }] = useToggle('123', '456')
  const hooksTest = () => {
    toggle()
  }
  /**
   * 类似vue computed  。
   * 缓存的是值 即使在jsx渲染模版中调用也不会执行。
   * 下面的例子相当于useCallback 但组件内部state更新（非deps情况） 函数不会重新执行
   */
  const memo = useMemo((params) => {
    console.log(`useMemo`)
    return () => '666666666666666'
  }, [])
  // 只缓存函数 如果在jsx渲染模版中调用 依然会执行
  const callback = useCallback((params) => {
    console.log(`useCallback`)
  }, [])
  useEffect((params) => {
    console.log(`useEffect`)
  }, [])
  return (
    <div>
      <button onClick={hooksTest}>修改state状态{state}</button>
      <div>{memo()}</div>
      <div>{callback()}</div>
    </div>
  )
}
