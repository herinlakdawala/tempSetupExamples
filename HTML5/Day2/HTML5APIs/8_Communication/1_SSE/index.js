const express = require('express');
const app = express();
const sse = require('./sse');

app.use(sse);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/data', (req, res) => {
    res.sseSetup();
    res.sseSend();
})

app.listen(3000, () => {
    console.log("Express Server Started....");
})