import { useMemo, useState } from 'react'

export const useToggle = (leftValue = true, rightValue) => {
  // 创建state 默认为true
  const [state, setState] = useState(leftValue)
  // 控制状态动作
  const actions = useMemo(() => {
    const toggle = (value) => {
      // 如果传值则使用入参
      if (value) {
        setState(value)
        return
      }
      // 不传值则切换默认参数 没有第二个参数则取反
      setState((x) => (x === leftValue ? rightValue || !leftValue : leftValue))
    }
    const setLeft = () => setState(leftValue)
    const setRight = () => setState(rightValue || !leftValue)
    return {
      toggle,
      setLeft,
      setRight,
    }
  }, [leftValue, rightValue])
  return [state, actions]
}
