/*
大多数 Node.js 核心 API 构建于惯用的异步事件驱动架构，
其中某些类型的对象（又称触发器，Emitter）
会触发命名事件来调用函数（又称监听器，Listener）。
*/

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter()
myEmitter.on('event', () => {
  console.log('触发事件')
  console.log(this === myEmitter)
})
myEmitter.on('event', function () {
  console.log('触发事件')
  console.log(this === myEmitter)
})
myEmitter.on('event', function () {
  let starttime = (new Date()).getTime()
  setImmediate(() => {
    let endtime = (new Date()).getTime()
    console.log('异步进行')
    console.log(endtime - starttime)
  })
})
let m = 0
myEmitter.once('event1', () => {
  console.log(++m)
})
myEmitter.emit('event')
myEmitter.emit('event1')
