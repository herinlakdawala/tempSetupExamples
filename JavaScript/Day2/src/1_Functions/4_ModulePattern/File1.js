var dev1;

(function(ns){
    function Check() {
        console.log("Check from File 1");
    }

    ns.Check = Check;
})(dev1 = dev1 || {});