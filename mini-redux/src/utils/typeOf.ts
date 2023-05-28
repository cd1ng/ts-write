export function typeOf(val: any): string {
  if (val === void 0) {
    return 'undefined'
  } else if (val === null) {
    return 'null'
  }

  const type = typeOf val
  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function': {
      return type
    }
  }
  if (Array.isArray(val)) return 'array'
  if (isDate(val)) return 'date'
  if (isError(val)) return 'error'

  const constructorName = ctorName(val)
  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName
  }

  return Object.prototype.toString
    .call(val)
    .slice(8, -1)
    .toLowerCase()
    .replace(/\s/g, '')
}

// 对日期和上面携带的日期方法进行判断
function isDate(val: any) {
  if (val instanceof Date) return true
  return (
    typeof val.toDateString === 'function' &&
    typeof val.getDate === 'function' &&
    typeof val.setDate === 'function'
  )
}

function ctorName(val: any): string | null {
  return typeof val.constructor === 'function' ? val.constructor.name : null
}

function isError(val: any) {
  return (
    val instanceof Error ||
    (typeof val.message === 'string' &&
      val.constructor &&
      typeof val.constructor.stackTraceLimit === 'number')
  )
}