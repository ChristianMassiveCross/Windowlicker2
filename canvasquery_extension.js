cq.Wrapper.prototype.activeObjects = new Array();
cq.Wrapper.prototype.getElementByName = function (name){
    var Element = false;
    for (var i = this.activeObjects.length - 1; i >= 0; i--) {
        if(this.activeObjects[i].Name == name){
            Element = this.activeObjects[i];
        }
    }
    return Element;
}
cq.Wrapper.prototype.SetColorsSchema = function (htmlColor){
    this.BackGoundColor = htmlColor;
};
cq.Wrapper.prototype.rewriteCanvas = function() {
    this.clear();
    this.context.fillStyle = this.BackGoundColor;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = this.activeObjects.length - 1; i >= 0; i--) {
        this.activeObjects[i].extendContext();
    };
    this.RenderSprite();
    return this;
};
cq.Wrapper.prototype.PointerDown = function (PosX,PosY){
    for (var i = 0 ; i < this.activeObjects.length; i++) {
        if(this.activeObjects[i].click(PosX,PosY)){
            this.RenderSprite();
            break;
        }
    };
}
cq.Wrapper.prototype.RenderSprite = function () {
    var sprites = new Array();
    var sprite = new Array();
    sprite['CanvasElement'] = {
        "fillStyle": '#ffffff',
        "elementType": 'Stroke',
        "startPos": [0,0],
        "endPos": [this.canvas.width,this.canvas.height]    
    };
    sprite['CanvasListener'] = 66;
    sprites.push(sprite);
    var counter = 0;
    for (var i=0; i<sprites.length; i++){
        this.context.beginPath();
        this.context.fillStyle = sprites[i]['CanvasElement'].fillStyle;
        this.context.moveTo(0,0);
        // alert(this.IsTouchDevice);
        this.context.lineTo( this.canvas.width, this.canvas.height );
        this.stroke();
    }
    
    // test scale line
};
