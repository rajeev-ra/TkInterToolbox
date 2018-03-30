define(["Control"], function (Control) {
    function Dialog(svg){
        var posx = 200, posy = 200, wid = 600, hei = 400;
        this.parent = svg;
        this.svg = svg;

        var svgns = "http://www.w3.org/2000/svg";

        var win = document.createElementNS(svgns, 'rect');
        win.setAttributeNS(null, 'x', posx);
        win.setAttributeNS(null, 'y', posy);
        win.setAttributeNS(null, 'height', hei);
        win.setAttributeNS(null, 'width', wid);
        win.setAttributeNS(null, 'style', 'fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0)');
        win.varry = {x:true, y:true};
        svg.appendChild(win);
        this.elements.push(win);

        var title = document.createElementNS(svgns, 'rect');
        title.setAttributeNS(null, 'x', posx);
        title.setAttributeNS(null, 'y', posy);
        title.setAttributeNS(null, 'height', 30);
        title.setAttributeNS(null, 'width', wid);
        title.setAttributeNS(null, 'style', 'fill:rgb(40, 139, 245);stroke-width:1;stroke:rgb(0,0,0)');
        title.varry = {x:true, y:false, top:true, bottom:false};
        svg.appendChild(title);
        this.elements.push(title);

        var syst = document.createElementNS(svgns, 'image');
        syst.setAttributeNS(null, 'x', posx + wid - 128);
        syst.setAttributeNS(null, 'y', posy);
        syst.setAttributeNS(null, 'height', 27);
        syst.setAttributeNS(null, 'width', 133);
        //syst.setAttributeNS(null, 'xlink:href', './img/system.png');
        syst.href.animVal = "./img/system.png";
        syst.href.baseVal = "./img/system.png";
        syst.varry = {x:false, y:false, left:false, right:true, top:true, bottom:false};
        svg.appendChild(syst);
        this.elements.push(syst);

        this.postInit(posx, posy, wid, hei, this);
    }

    Dialog.prototype = Object.create( Control.prototype );
    Dialog.prototype.constructor = Dialog;

    return Dialog;
});