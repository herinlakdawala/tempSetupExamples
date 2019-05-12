function CalculatePi(loop) {
    var c = parseInt(loop);
    var f = parseFloat(loop);
    var Pi = 0, n = 1;

    if (isNaN(c) || f != c) {
        throw ("errInvalidNumber");
    } else if (c <= 0) {
        throw ("errNegativeNumber");
    }

    for (var i = 0; i <= c; i++) {
        Pi = Pi + (4 / n) - (4 / (n + 2));
        n = n + 4;
    }

    self.postMessage({ 'result': Pi });
}

self.onmessage = function (e) {
    CalculatePi(e.data.value);
}