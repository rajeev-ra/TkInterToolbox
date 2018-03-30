define(["Resize"], function (Resize) {
    function Control() {}

    Object.assign( Control.prototype, {
        svg:null,
        elements: [],
        children: [],
        parent: null,
        boundary: null,
        border:{
            top:null,
            bottom:null,
            left:null,
            right:null
        },
    
        postInit: function(x, y, w, h, obj){
            this.boundary = this.createBorderAndBound(x, y, w, h, obj, Resize.mouseButtonDown); 
            this.boundary.setAttributeNS(null, 'style', 'fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0);fill-opacity:0.0');
            this.boundary.varry = {x:true, y:true};

            this.border.left = this.createBorderAndBound(x-4, y, 9, h, obj, Resize.mouseButtonDownLeft, Resize.mouseArrowHResize);
            this.border.left.setAttributeNS(null, 'style', 'fill:rgb(255,0,0);stroke-width:0;fill-opacity:0.0');
            this.border.left.varry = {x:false, y:true, left:true, right:false};

            this.border.right = this.createBorderAndBound(x+w-4, y, 9, h, obj, Resize.mouseButtonDownRight, Resize.mouseArrowHResize);
            this.border.right.setAttributeNS(null, 'style', 'fill:rgb(255,0,0);stroke-width:0;fill-opacity:0.0');
            this.border.right.varry = {x:false, y:true, left:false, right:true};

            this.border.top = this.createBorderAndBound(x, y-4, w, 9, obj, Resize.mouseButtonDownTop, Resize.mouseArrowVResize);
            this.border.top.setAttributeNS(null, 'style', 'fill:rgb(255,0,0);stroke-width:0;fill-opacity:0.0');
            this.border.top.varry = {x:true, y:false, top:true, bottom:false};

            this.border.bottom = this.createBorderAndBound(x, y+h-4, w, 9, obj, Resize.mouseButtonDownBottom, Resize.mouseArrowVResize);
            this.border.bottom.setAttributeNS(null, 'style', 'fill:rgb(255,0,0);stroke-width:0;fill-opacity:0.0');
            this.border.bottom.varry = {x:true, y:false, top:false, bottom:true};
        },

        createBorderAndBound: function (x, y, w, h, obj, mouseDown, hvr){
            var svgns = "http://www.w3.org/2000/svg";
            var tempRect = document.createElementNS(svgns, 'rect');
            tempRect.setAttributeNS(null, 'x', x);
            tempRect.setAttributeNS(null, 'y', y);
            tempRect.setAttributeNS(null, 'height', h);
            tempRect.setAttributeNS(null, 'width', w);
            tempRect.obj = obj;
            tempRect.onmousedown = mouseDown;
            if(hvr){
                tempRect.onmouseenter = hvr;
                tempRect.onmouseleave = Resize.mouseArrowNormal;
            }

            this.svg.appendChild(tempRect);
            this.elements.push(tempRect);
            return tempRect;
        },
    
        getAttributeInt: function(element, attributeName){
            var v = element.getAttributeNS(null, attributeName);
            return parseInt(v, 10);
        },
    
        setAttributeInt: function(element, attributeName, attributeVal){
            element.setAttributeNS(null, attributeName, attributeVal);
        }
    });

    return Control;
});