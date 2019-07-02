/*
The zlib module provides compression functionality implemented using Gzip and Deflate/Inflate, as well as Brotli.
*/
const zlib = require('zlib')
const gzip = zlib.createGzip()
const fs = require('fs')
const inp = fs.createReadStream('../input.txt')
const out = fs.createWriteStream('input.txt.gz')

inp.pipe(gzip).pipe(out)

const input = '.................................'
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'))
  } else {
    // handle error
  }
})

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64')
zlib.unzip(buffer, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString())
  } else {
    // handle error
  }
})
