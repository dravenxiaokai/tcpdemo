//使用net创建TCP服务器
const net = require('net')

const PORT = 18001;
const HOST = '127.0.0.1';

var app = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(socket.remoteAddress, socket.remotePort, ' send ', data.toString())
        socket.write('server recevied\n')
    })
    socket.on('close', () => {
        console.log(socket.remoteAddress, socket.remotePort, 'disconnected')
    })
    socket.on('error', () => {
        console.log('has error')
    })
})

app.listen(PORT, HOST, () => {
    console.log('tcp server running on tcp://', HOST, ':', PORT)
})