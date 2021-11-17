import { useRef } from 'react'
/**
 *
 * @param {Function} factory
 * @param {Array} deps
 * @returns 缓存对象
 */
export function useCreation(factory, deps) {
  // 创建初始依赖对象
  const { current } = useRef({
    deps,
    obj: undefined,
    initialized: false,
  })
  // 如果是第一次执行会走下面逻辑  如果依赖没有发生变化
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    //   记录新的依赖
    current.deps = deps
    // 记录当前最新的值
    current.obj = factory()
    // 第一次后置为true 只有依赖变化后才更新 依赖以及最新的值
    current.initialized = true
  }
  return current.obj
}
// 依赖项是否发生变化 true为没变化
function depsAreSame(oldDeps, deps) {
  if (oldDeps === deps) return true
  for (let i = 0; i < oldDeps.length; i++) {
    if (oldDeps[i] !== deps[i]) return false
  }
  return true
}
