const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const uid_generator = require('uid')

const colors = ['#35cd96','#ffa97a','#6bcbef','#e542a3']
let count = 0

app.use(express.static('build'))

io.on('connection', (socket)=>{
    console.log('a user connected');
    socket.on('chat message', (obj)=>{
        console.log(obj)
        console.log('message: ' + obj.id+' : '+obj.name +' : ' +obj.msg + ' : ' +obj.color);
        io.emit('chat message',obj);
      });
    socket.emit('send-id-color',{
      id: uid_generator(),
      color: colors[count]
    })
    if(count===3)
      count = 0
    else
      count +=1
    socket.on('disconnect', ()=>{
        console.log('user disconnected')
  })
})

http.listen(3000, ()=>{
  console.log('listening on *:3000')
})

