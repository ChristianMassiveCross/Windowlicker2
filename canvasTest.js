$(document).ready(  function (evt) {
    var Stage = cq();
    Stage.SetColorsSchema('#123456');
    Stage.fillStyle("#ff0000").fillRect(64, 64, 32, 32);
    ObjRect = new activeObjectRect(Stage,'Red');
    ObjRect.setFillColor('#ff0000');
    ObjRect.setTopLeft(50,50);
    ObjRect.setHeightAndLenght(50,50);
    ObjRect.action = function (){
        innerObject = new activeObjectRect(Stage,'innerObject');
        innerObject.setFillColor('#0000ff');
        innerObject.setTopLeft(200,50);
        innerObject.setHeightAndLenght(150,33);
        innerObject.action = function (){
            this.removeFromStage();
        }
        innerObject.addToStage();
        Stage.rewriteCanvas();
    };
    ObjRect.addToStage();
    new activeObjectRect(Stage,'doof').addToStage();
    new activeObjectRect(Stage,'Text').setTopLeft(120,30).addToStage();
    Stage.rewriteCanvas();
    Stage.framework({
        onresize: function(width, height) {
            this.canvas.width = width;
            this.canvas.height = height;
            this.rewriteCanvas();
        },

        /* mouse and touch events */
        onousedown: function(x, y) { alert('down');},
        onmouseup: function(x, y) { //alert('up:'+x+y);
            doof_element = Stage.getElementByName('doof');
            doofPosX = doof_element.PosX;
            doofPosY = doof_element.PosY;
            doof_element.setTopLeft(++doofPosX,doofPosY);
            Stage.PointerDown(x,y);
        },
        //ontouchstart: function () { },
});
    //hier metadaten sammeln 
    // alert('ontouchstart'+this.ontouchstart);
    if (this.ontouchstart != 'undefined'){ // also die function fehlt nicht
        Stage.IsTouchDevice = true;
    }else{
        Stage.IsTouchDevice = false;
    }
    Stage.appendTo("body");
});
