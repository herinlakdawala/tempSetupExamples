const http = require('http');
const fs = require('fs');
const StringEmitter = require('./StringEmitter');

var server = http.createServer((req, res) => {
    fs.readFile('./index.html', 'utf-8', (err, data) => {
        if (err) throw err;

        res.writeHeader(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
    });
});

server.listen(3000, function () {
    console.log("Server Started...");
});

const WebSocketServer = require('websocket').server;

const wsServer = new WebSocketServer({
    httpServer: server
});

var sm = new StringEmitter();

sm.on('data', (s) => {
    if (clients.length > 0) {
        for (let c in clients) {
            clients[c].sendUTF(s);
        }
    }
})

var count = 0;
var clients = [];

wsServer.on('request', function (req) {
    var connection = req.accept('echo-protocol');

    var id = ++count;
    clients[id] = connection;
    console.log(`Connection Accepted [${id}]`);

    connection.on("close", function () {
        console.log(`Connection Closed [${id}]`);
    })
});