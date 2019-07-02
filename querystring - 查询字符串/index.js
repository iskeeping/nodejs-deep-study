/*
The querystring module provides utilities for parsing and formatting URL query strings.
*/
const querystring = require('querystring')

let str1 = querystring.stringify({foo: 'bar', baz: ['qux', 'quux'], corge: ''})
// Returns 'foo=bar&baz=qux&baz=quux&corge='
console.log(str1)

let str2 = querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':')
// Returns 'foo:bar;baz:qux'
console.log(str2)
