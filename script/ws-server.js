const WebSocket = require('ws');
const {createServer} = require('https');
const fs = require('fs');
const path = require('path');

const server = createServer({
    key: fs.readFileSync(path.join(__dirname, './secret/server.key')),
    cert: fs.readFileSync(path.join(__dirname, './secret/server.crt')),
});

const wss = new WebSocket.WebSocketServer({ server });

wss.on('connection', (ws) => {

    function broadcast(data, isBinary, includeSelf) {
        if (typeof data === 'object' && !isBinary) {
            data = JSON.stringify(data);
        }
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && (!includeSelf && client !== ws || includeSelf)) {
                client.send(data, {binary: isBinary});
            }
        });
    }

    ws.on('message', (data, isBinary) => {
        broadcast(data.toString(), isBinary, false)
    });

    if (wss.clients.size === 2) {
        broadcast({type: 'ready'}, false, true)
    }

    if (wss.clients.size > 2) {
        ws.close();
    }

});

server.listen(8080);