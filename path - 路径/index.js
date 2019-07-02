/*
The path module provides utilities for working with file and directory paths.
*/
const path = require('path')

//POSIX
let path1 = path.basename('C:\\temp\\myfile.html')
// Returns: 'C:\\temp\\myfile.html'
console.log(path1)

//Windows
let path2 = path.basename('C:\\temp\\myfile.html')
// Returns: 'myfile.html'
console.log(path2)

//Windows and POSIX
let path3 = path.posix.basename('/tmp/myfile.html')
// Returns: 'myfile.html'
console.log(path3)

console.log(process.env.PATH)
// Prints: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

let delimiterArr = process.env.PATH.split(path.delimiter)
// Returns: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']
console.log(delimiterArr.toString())

let dirname = path.dirname('/foo/bar/baz/asdf/quux')
// Returns: '/foo/bar/baz/asdf'
console.log(dirname)

let extname = path.extname('index.html')
// Returns: '.html'
console.log(extname)
