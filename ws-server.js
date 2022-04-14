const WebSocket = require('ws');

const wss = new WebSocket.WebSocketServer({port: 8080});

wss.on('connection', (ws) => {
    function broadcast(data, isBinary, includeSelf) {
        if (typeof data === 'object' && !isBinary) {
            data = JSON.stringify(data);
        }
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN &&
                (!includeSelf && client !== ws || includeSelf)) {
                client.send(data, {binary: isBinary});
            }
        });
    }

    ws.on('message', (data, isBinary) => {
        broadcast(data.toString(), isBinary, false);
    });

    if (wss.clients.size === 2) {
        broadcast({type: 'ready'}, false, true);
    }

    if (wss.clients.size > 2) {
        ws.close();
    }

});

