import { useRef, useEffect } from 'react'
// 标准的发布订阅 订阅多个时接收到的emit参数只支持一对多 RXJS相当于多播的情况
export class EventEmitter {
  // 创建事件中心
  subscriptions = new Set()
  emit(val) {
    console.log(this.subscriptions)
    for (const v of this.subscriptions) {
      v(val)
    }
  }
  useSubscriptions = (fn) => {
    const callbackRef = useRef()
    callbackRef.current = fn
    useEffect(() => {
      const subscription = (val) => {
        if (callbackRef.current) {
          callbackRef.current(val)
        }
      }
      this.subscriptions.add(subscription)
      return () => {
        this.subscriptions.delete(subscription)
      }
    }, [])
  }
}
export const useEventEmitter = () => {
  const ref = useRef()
  if (!ref.current) {
    ref.current = new EventEmitter()
  }
  return ref.current
}
