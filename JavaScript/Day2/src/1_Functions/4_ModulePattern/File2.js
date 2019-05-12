var dev2;

(function (ns) {
    var Check = true;
    var document = "file2.js";;

    function Test() {
        console.log("Test from File 2");
    }

    ns.Test = Test;
    ns.Check = Check;
})(dev2 = dev2 || {})