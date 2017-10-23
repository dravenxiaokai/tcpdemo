//使用net创建TCP客户端
const net = require('net')

const HOST = '127.0.0.1'
const PORT = 18001

var tcpClient = net.Socket()

tcpClient.connect(PORT, HOST, () => {
    console.log('connect success')
    tcpClient.write('this is tcp client by Node.js')
})

tcpClient.on('data', (data) => {
    console.log('received: ', data.toString())
})
tcpClient.on('error',()=>{
    console.log('server error')
})