// 原始类型的类型标注
const myName: string = 'cd'
const age: number = 25
const male: boolean = true
const undef: undefined = void 0
const nul: null = null
const obj: object = { myName, age, male }
const bigNumber: bigint = 12313123213121323133n
const symbolVar: symbol = Symbol('var')

// 可以认为void是一个空类型
// 会隐式推导为void，但返回值为undefined
function fun1() {}
function fun2() {
  return
}
// 返回值undefined,但可以将其用void标注
function fun3() {
  return undefined
}

// 数组的类型标注
const arrStr1: string[] = []
const arrStr2: Array<string> = []

// 获取固定数据量的数组，推荐使用元组，在越界访问时给出类型报错
const tuple1: [string, string, string] = ['lin', 'bu', 'du']
// Tuple type '[string, string, string]' of length '3' has no element at index '599'.
tuple1[3] = 'hellp'
// console.log(arr4[599])
// 可不必占满整个数组，使用可选链条进行判断即可,但其长度也是可变的
const tuple2: [string, string?, string?] = ['c', 'd']
type length = typeof tuple2.length
// TS4.0版本可使用具名元组Labeled Tuple Elements,增强元组的可读性，在标签上打上属性
const myInfo: [name: string, age: number, job?: string] = ['cd', 18, 'frontEnd']

// ps TS的自定义Hooks中有使用
function useState<T>(initial: T): [value: T, setter: (T) => void] {}
// function useState<T>(initial:T):[T,(T)=>void]{}

// 对象的类型标注
// 每一个属性的值必须一一对应到接口的属性类型
// 不能有多的属性，也不能有少的属性，包括直接在对象内部声明
interface ObjDescription {
  name: string
  readonly age: number
  male?: boolean
}
const objInter: ObjDescription = {
  name: 'cd',
  age: 18,
  male: true,
}
// 防止对象的属性再次被赋值
objInter.age = 19

//  {}
// {}作为类型签名就是一个合法的，但内部无属性定义的空对象
const testObj: {} = { test: 'a' }
// 无法对变量进行任何赋值操作
testObj.test = 'b'

// 联合类型代表了一组类型的可用变量，对成员没有任何新增
// 联合类型中的函数类型需要使用括号()包裹起来,函数类型并不存在字面量类型，(()=>{})
// 嵌套使用的联合类型，会被展品到第一级
interface Tmp {
  mixed: true | string | 599 | {} | (() => {}) | (1 | 2)
}

// 枚举
// 类型于constants 文件
export const PageUrlC = {
  Home_Page_Url: 'url1',
  Setting_Page_Url: 'url2',
  Share_Page_Url: 'url3',
}
enum PageUrl {
  Home_Page_Url = 'url1',
  Setting_Page_Url = 'url2',
  Share_Page_Url = 'url3',
}

const home = PageUrl.Home_Page_Url
//  不声明枚举的值，会默认使用数字枚举，从0开始步进为1

// 枚举与对象的差异
// 对象是单项映射，枚举是双向映射的，可以从枚举成员映射到枚举值，也可以从枚举值映射到枚举成员
enum Items {
  Foo,
  Bar,
  Baz = 'BazValue',
}

const fooValue = Items.Foo // 0
const fooKey = Items[0] // "Foo"
// 编译产物
// 仅有值为数字的枚举成员才能够进行这样的双向枚举，字符串枚举成员仍然只会进行单次映射：
// ;('use strict')
// var Items
// ;(function (Items) {
//   Items[(Items['Foo'] = 0)] = 'Foo'
//   Items[(Items['Bar'] = 1)] = 'Bar'
//   Items["Baz"] = "BazValue";
// })(Items || (Items = {}))

// 常量枚举
const enum ItemSub {
  Foo,
  Bar,
  Baz,
}
// 它和普通枚举的差异主要在访问性与编译产物。对于常量枚举，你只能通过枚举成员访问枚举值
