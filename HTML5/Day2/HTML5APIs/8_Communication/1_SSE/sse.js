module.exports = function (req, res, next) {
    res.sseSetup = function () {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream'
        })
    }

    res.sseSend = function () {
        setInterval(function () {
            res.write(`data: Server Time -- ${Date.now()}\n\n`);
        }, 2000);
    }

    next()
}