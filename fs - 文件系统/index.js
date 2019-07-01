/*
fs 模块提供了一个 API，用于以模仿标准 POSIX 函数的方式与文件系统进行交互。
*/

//文件路径删除
const fs = require('fs')
/*fs.unlink('/tmp/hello', (err) => {
    if (err) throw err
    console.log('已成功删除 /tmp/hello')
})*/

//重命名
/*fs.rename('/tmp/hello', '/tmp/world', (err) => {
    if (err) throw err
    console.log('重命名完成')
})*/

fs.open('../file.txt', 'r', (err, fd) => {
  if (err) throw err
  fs.close(fd, (err) => {
    if (err) throw err
    console.log(fd)
  })
})
