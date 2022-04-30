const WebSocket = require('ws');

const server = new WebSocket.WebSocketServer({port: 8080});

server.on('connection', (client) => {
    function broadcast(data, isBinary, includeSelf) {
        if (typeof data === 'object' && !isBinary) {
            data = JSON.stringify(data);
        }
        server.clients.forEach((_client) => {
            if (_client.readyState === WebSocket.OPEN && (!includeSelf && _client !== client || includeSelf)) {
                _client.send(data, {binary: isBinary});
            }
        });
    }

    client.on('message', (data, isBinary) => {
        broadcast(data.toString(), isBinary, false);
    });

    if (server.clients.size === 2) {
        broadcast({type: 'ready'}, false, true);
    }

    if (server.clients.size > 2) {
        client.close();
    }

});

