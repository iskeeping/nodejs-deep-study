/**
 * async_hooks API 能使我们追踪资源（resource）变得更加简单，
 * 只需要使用init、before、after、destroy这些回调函数去初始化 async_hooks 接口。
 * */
const async_hooks = require('async_hooks')

const eid = async_hooks.executionAsyncId()

const tid = async_hooks.triggerAsyncId()

function init(asyncId, type, triggerAsyncId, resource) {
    console.log('init')
}

function before(asyncId) {
    console.log('before')
}

function after(asyncId) {
    console.log('after')
}

function destroy(asyncId) {
    console.log('destroy')
}

function promiseResolve(asyncId) {
    console.log('promiseResolve')
}

const asyncHook = async_hooks.createHook({init, before, after, destroy, promiseResolve})
