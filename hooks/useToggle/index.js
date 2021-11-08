import { useMemo, useState } from 'react'

export const useToggle = (leftValue = true, rightValue) => {
  const [state, setState] = useState(leftValue)
  const actions = useMemo(() => {
    const toggle = (value) => {
      if (value) {
        setState(value)
        return
      }
      setState((x) => (x === leftValue ? rightValue : leftValue))
    }
    const setLeft = () => setState(leftValue)
    const setRight = () => setState(rightValue)
    return {
      toggle,
      setLeft,
      setRight,
    }
  }, [leftValue, rightValue])
  return [state, actions]
}
