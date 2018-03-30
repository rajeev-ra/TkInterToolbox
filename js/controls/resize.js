define(function (require) {
    return {
        moveCheck: false,
        resizeCheck: {
            top:false,
            bottom:false,
            left:false,
            right:false
        },
        selObj: null,
        
        move: function(x, y, o){
            for(var i = 0; i < o.elements.length; i++){
                o.setAttributeInt(o.elements[i], "x", o.getAttributeInt(o.elements[i], "x") + x);
                o.setAttributeInt(o.elements[i], "y", o.getAttributeInt(o.elements[i], "y") + y);
            }
            for(var i = 0; i < o.children.length; i++){
                o.setAttributeInt(o.children[i], "x", o.getAttributeInt(o.children[i], "x") + x);
                o.setAttributeInt(o.children[i], "y", o.getAttributeInt(o.children[i], "y") + y);
            }
        },
    
        resizeLeft: function(x, o){
            for(var i = 0; i < o.elements.length; i++){
                if(o.elements[i].varry.x){
                    o.setAttributeInt(o.elements[i], "x", o.getAttributeInt(o.elements[i], "x") + x);
                    o.setAttributeInt(o.elements[i], "width", o.getAttributeInt(o.elements[i], "width") - x);
                }
                else if(o.elements[i].varry.left){
                    o.setAttributeInt(o.elements[i], "x", o.getAttributeInt(o.elements[i], "x") + x);
                }
            }
            for(var j = 0; j < o.children.length; j++){
                o.setAttributeInt(o.children[j], "x", o.getAttributeInt(o.children[j], "x") + x);
            }
        },
    
        resizeRight: function(x, o){
            for(var i = 0; i < o.elements.length; i++){
                if(o.elements[i].varry.x){
                    o.setAttributeInt(o.elements[i], "width", o.getAttributeInt(o.elements[i], "width") + x);
                }
                else if(o.elements[i].varry.right){
                    o.setAttributeInt(o.elements[i], "x", o.getAttributeInt(o.elements[i], "x") + x);
                }
            }
        },
    
        resizeTop: function(y, o){
            for(var i = 0; i < o.elements.length; i++){
                if(o.elements[i].varry.y){
                    o.setAttributeInt(o.elements[i], "y", o.getAttributeInt(o.elements[i], "y") + y);
                    o.setAttributeInt(o.elements[i], "height", o.getAttributeInt(o.elements[i], "height") - y);
                }
                else if(o.elements[i].varry.top){
                    o.setAttributeInt(o.elements[i], "y", o.getAttributeInt(o.elements[i], "y") + y);
                }
            }
            for(var j = 0; j < o.children.length; j++){
                o.setAttributeInt(o.children[j], "y", o.getAttributeInt(o.children[j], "y") + y);
            }
        },
    
        resizeBottom: function(y, o){
            for(var i = 0; i < o.elements.length; i++){
                if(o.elements[i].varry.y){
                    o.setAttributeInt(o.elements[i], "height", o.getAttributeInt(o.elements[i], "height") + y);
                }
                else if(o.elements[i].varry.bottom){
                    o.setAttributeInt(o.elements[i], "y", o.getAttributeInt(o.elements[i], "y") + y);
                }
            }
        },

        mouseButtonDownLeft: function(event){
            event.preventDefault();
            if(0 === event.button){
                rs = require("Resize");
                rs.resizeCheck.left = true;
                rs.selObj = this.obj;
                rs.mouseArrowHResize();
            }
        },

        mouseButtonDownRight: function(event){
            event.preventDefault();
            if(0 === event.button){
                rs = require("Resize");
                rs.resizeCheck.right = true;
                rs.selObj = this.obj;
                rs.mouseArrowHResize();
            }
        },

        mouseButtonDownTop: function(event){
            event.preventDefault();
            if(0 === event.button){
                rs = require("Resize");
                rs.resizeCheck.top = true;
                rs.selObj = this.obj;
                rs.mouseArrowVResize();
            }
        },

        mouseButtonDownBottom: function(event){
            event.preventDefault();
            if(0 === event.button){
                rs = require("Resize");
                rs.resizeCheck.bottom = true;
                rs.selObj = this.obj;
                rs.mouseArrowVResize();
            }
        },

        mouseButtonDown: function(event){
            event.preventDefault();
            if(0 === event.button){
                rs = require("Resize");
                rs.moveCheck = true;
                rs.selObj = this.obj;
                rs.mouseArrowMove();
            }
        },

        mouseButtonUp: function(event){
            event.preventDefault();
            if(0 === event.button){
                rs = require("Resize");
                rs.selObj = null;
                rs.moveCheck = rs.resizeCheck.left = rs.resizeCheck.right = rs.resizeCheck.top = rs.resizeCheck.bottom = false;
                rs.mouseArrowNormal();
            }       
        },

        mouseMove: function(event){
            event.preventDefault();
            rs = require("Resize");
            if(rs.selObj){
                var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
                var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
                if(rs.moveCheck){
                    rs.move(movementX, movementY, rs.selObj);
                }
                else if(rs.resizeCheck.left){
                    rs.resizeLeft(movementX, rs.selObj);
                }
                else if(rs.resizeCheck.right){
                    rs.resizeRight(movementX, rs.selObj);
                }
                else if(rs.resizeCheck.top){
                    rs.resizeTop(movementY, rs.selObj);
                }
                else if(rs.resizeCheck.bottom){
                    rs.resizeBottom(movementY, rs.selObj);
                }
            }
        },

        mouseArrowVResize: function(){
            document.body.style.cursor = "ns-resize";
        },

        mouseArrowHResize: function(){
            document.body.style.cursor = "ew-resize";
        }, 

        mouseArrowMove: function(){
            document.body.style.cursor = "move";
        }, 

        mouseArrowNormal: function(){
            document.body.style.cursor = "auto";
        }
    };
});