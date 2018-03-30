requirejs.config({
    baseUrl: '.',
    paths: {
        "Control":"js/controls/control",
        "Dialog":"js/controls/dialog",
        "Resize": "js/controls/resize"
    }
});

require(["Resize", "Control","Dialog"], function(Resize, Control, Dialog){
    v = new Dialog(document.getElementById("svg"));
    document.onmouseup = Resize.mouseButtonUp;
    document.onmousemove = Resize.mouseMove;
});