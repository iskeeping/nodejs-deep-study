/*
assert 模块提供了一组简单的断言测试，可用于测试不变量。
存在严格模式（strict）和遗留模式（legacy），但建议仅使用严格模式。
*/
const assert = require('assert')

// 生成 AssertionError 以便稍后比较错误的消息：
const {message} = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual'
})

console.log(message)
