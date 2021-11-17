import { useRef } from 'react'
import { useCreation } from '../useCreation'
import { useUpdate } from '../useUpdate'
// k:v 原对象:代理过的对象   存储代理过的对象
const proxyMap = new WeakMap()
// k:v 代理过的对象:原对象   存储原对象
const rawMap = new WeakMap()

function isObject(val) {
  return typeof val === 'object' && val !== null
}
// 为目标对象添加代理
function observer(initialVal, cb) {
  const existingProxy = proxyMap.get(initialVal)

  // 添加缓存 防止重新构建proxy
  if (existingProxy) {
    return existingProxy
  }

  // 防止代理已经代理过的对象
  // https://github.com/alibaba/hooks/issues/839
  if (rawMap.has(initialVal)) {
    return initialVal
  }
  // 开始只设置当前传入对象为代理对象
  const proxy = new Proxy(initialVal, {
    get(target, key, receiver) {
      //   debugger
      // 获取值时 把访问路径的所有对象都代理为proxy对象
      const res = Reflect.get(target, key, receiver)
      return isObject(res) ? observer(res, cb) : Reflect.get(target, key)
    },
    set(target, key, val) {
      const ret = Reflect.set(target, key, val)
      cb()
      return ret
    },
    deleteProperty(target, key) {
      const ret = Reflect.deleteProperty(target, key)
      cb()
      return ret
    },
  })
  // 把代理对象和原对象 缓存起来 防止重复创建
  proxyMap.set(initialVal, proxy)
  rawMap.set(proxy, initialVal)

  return proxy
}
// 接收被代理的目标对象
export function useReactive(initialState) {
  // 触发渲染更新
  const update = useUpdate()
  // 获取初始需要代理的数据
  const stateRef = useRef(initialState)
  // 缓存代理对象
  const state = useCreation(() => {
    return observer(stateRef.current, () => {
      update()
    })
  }, [])

  return state
}
