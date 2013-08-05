$(document).ready(  function (evt) {
    var Stage = cq();
    Stage.setColorsSchema();
    Stage.rewriteCanvas();
    Stage.framework({
        onresize: function(width, height) {
            this.canvas.width = width;
            this.canvas.height = height;
            this.rewriteCanvas();
        },
        /* mouse and touch events */
        onmouseup: function(x, y) { //alert('up:'+x+'..'+y);
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