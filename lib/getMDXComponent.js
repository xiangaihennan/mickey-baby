import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as jsxRuntime from 'react/jsx-runtime'

/**
 * 兼容 mdx-bundler 生成代码的运行时装载器
 * @param {string} code
 * @param {Record<string, unknown>} globals
 */
export const getMDXComponent = (code, globals = {}) => {
  const scope = {
    React,
    ReactDOM,
    _jsx_runtime: jsxRuntime,
    ...globals,
  }

  // eslint-disable-next-line no-new-func
  const fn = new Function(...Object.keys(scope), code)
  return fn(...Object.values(scope))
}
