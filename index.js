const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 8080}, () =>{
    console.log("Server started.")
})

wss.on('connection', (ws) => {
    ws.on("message", (data) =>{
        console.log("Data recived  %o" +data)
        ws.send(data)
    })
})

wss.on('listening', ()=>{
    console.log("Server is listening on port 8080")
})