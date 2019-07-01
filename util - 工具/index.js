/*
The util module is primarily designed to support the needs of Node.js' own internal APIs.
However, many of the utilities are useful for application and module developers as well.
*/

const util = require('util')
const EventEmitter = require('events')

async function fn () {
  return 'hello world'
}

const callbackFunction = util.callbackify(fn)

callbackFunction((err, ret) => {
  if (err) throw err
  console.log(ret)
})

let d = new Date()
let str = util.format(
  '%s年%s月%s日',
  d.getFullYear(),
  d.getMonth() + 1,
  d.getDate()
)
console.log(str)

let str1 = util.formatWithOptions({colors: true}, 'See object %O', {foo: 42})
console.log(str1)

function MyStream () {
  EventEmitter.call(this)
}

util.inherits(MyStream, EventEmitter)

MyStream.prototype.write = function (data) {
  this.emit('data', data)
}

const stream = new MyStream()

console.log(stream instanceof EventEmitter) // true
console.log(MyStream.super_ === EventEmitter) // true

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`)
})
stream.write('It works!') // Received data: "It works!"

class Foo {
  get [Symbol.toStringTag] () {
    return 'bar'
  }
}

class Bar {}

const baz = Object.create(null, {[Symbol.toStringTag]: {value: 'foo'}})

console.log(util.inspect(new Foo())) // 'Foo [bar] {}'
console.log(util.inspect(new Bar())) // 'Bar {}'
console.log(util.inspect(baz))       // '[foo] {}'
