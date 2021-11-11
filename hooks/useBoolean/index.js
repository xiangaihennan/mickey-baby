import { useMemo } from 'react'
import { useToggle } from '../useToggle'
export const useBoolean = (defaultValue = false) => {
  const [state, { toggle }] = useToggle(defaultValue)
  const actions = useMemo(() => {
    const setTrue = toggle(true)
    const setFlase = toggle(false)
    return {
      setTrue,
      setFlase,
      toggle,
    }
  }, [toggle])
  return [state, actions]
}
