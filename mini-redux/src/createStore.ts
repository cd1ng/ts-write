import { typeOf as kindOf, curry } from '../src/utils'

// createStore提供作为生成唯一store的函数
// 创建一个包含程序完整state树的Redux store，应用中应有且仅有一个store
// createStore(reducer,[preloadedState],[enhancer])
type CreateStoreProps = (
  reducer: Function,
  preloadedState?: any,
  enhancer?: Function[],
) => { getState: Function; dispatch: Function; subscribe: Function }

/**
 * @description createStore创建一个包含程序完整state树的Redux store，应用中应有且仅有一个store
 * @param reducer -Function  接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
 * @param preloadedState -any 初始时的 state和接受combineReducers 创建 reducer
 * @param enhancer -Function Store enhancer
 */
const createStore: CreateStoreProps = (reducer, preloadedState, enhancer) => {
  if (typeof reducer !== 'function') {
    throw new Error(`Expect the root reducer to be a fucntion,instead of ${kindOf(reducer)}`)
  }

  let initialState = preloadedState || []
  let currentState = initialState
  const listener: any = []

  if (enhancer) {
    return enhancer(createStore)(reducer, preloadedState)
  }

  const getState = () => currentState

  const dispatch = (action) => {
    listener.map((item) => {})
  }

  const subscribe = (target: any) => {
    !listener.includes(target) && listener.push(target)
  }

  return { getState, dispatch, subscribe }
}
