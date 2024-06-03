const socket = io('http://localhost:3000')

socket.on('connection', data => {
    console.log(data)
})