/*
The timer module exposes a global API for scheduling functions to be called at some future period of time.
Because the timer functions are globals, there is no need to call require('timers') to use the API.
The timer functions within Node.js implement a similar API as the timers API provided by Web Browsers
but use a different internal implementation that is built around the Node.js Event Loop.
*/
const util = require('util')
const setImmediatePromise = util.promisify(setImmediate)

setImmediatePromise('foobar').then((value) => {
  // value === 'foobar' (passing values is optional)
  // This is executed after all I/O callbacks.
  console.log(value)
})

// Or with async function
async function timerExample () {
  console.log('Before I/O callbacks')
  await setImmediatePromise()
  console.log('After I/O callbacks')
}

timerExample()
