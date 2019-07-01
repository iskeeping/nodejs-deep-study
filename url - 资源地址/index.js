/*
The url module provides utilities for URL resolution and parsing.
*/
/*const url = require('url')
let myURL = new URL('https://測試')
console.log(myURL.href)
myURL = new URL('http://Example.com/', 'https://example.org/')
// http://example.com/
console.log(myURL.href)

myURL = new URL('https://Example.com/', 'https://example.org/')
// https://example.com/
console.log(myURL.href)

myURL = new URL('foo://Example.com/', 'https://example.org/')
// foo://Example.com/
console.log(myURL.href)

myURL = new URL('http:Example.com/', 'https://example.org/')
// http://example.com/
console.log(myURL.href)

myURL = new URL('https:Example.com/', 'https://example.org/')
// https://example.org/Example.com/
console.log(myURL.href)

myURL = new URL('foo:Example.com/', 'https://example.org/')
// foo:Example.com/
console.log(myURL.href)*/

let params

params = new URLSearchParams('user=abc&query=xyz')
console.log(params.get('user'))
// Prints 'abc'
console.log(params.toString())
// Prints 'user=abc&query=xyz'

params = new URLSearchParams('?user=abc&query=xyz')
console.log(params.toString())
// Prints 'user=abc&query=xyz'
