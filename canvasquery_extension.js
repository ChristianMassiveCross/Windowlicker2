cq.Wrapper.prototype.activeObjects = new Array();
cq.Wrapper.prototype.IsATouchDevice = function (){
    return (('ontouchstart' in window) || (navigator.msMaxTouchPoint > 0));
};
cq.Wrapper.prototype.printActiveObjectsNames = function (){
    for (var i = 0; i < this.activeObjects.length ; i++) {
        console.log(i+": "+this.activeObjects[i].Name);
    }

};
cq.Wrapper.prototype.getElementNumberByName = function (name){
    ElementNumber = 'unknown';
    for (var i = 0; i < this.activeObjects.length ; i++) {
        if(this.activeObjects[i].Name == name){
            ElementNumber = i;
            break;
    }
        }
    return ElementNumber;
};
cq.Wrapper.prototype.getElementByName = function (name){
    var Element = false;
    for (var i = this.activeObjects.length - 1; i >= 0; i--) {
        if(this.activeObjects[i].Name == name){
            Element = this.activeObjects[i];
        }
    }
    return Element;
}
cq.Wrapper.prototype.setColorsSchema = function (Name){
    switch (Name){
        case 'debug':
        this.BackGoundColor = '#ff0000';
        this.ButtonColor = '#00ff00';
        break;
        case 'fancy':
        this.BackGoundColor = '#fefefe';
        this.ButtonColor = '#a0a0a0';
        break;
        default:
        this.BackGoundColor = '#123456';
        this.ButtonColor = '#654321';

    };
};
cq.Wrapper.prototype.rewriteCanvas = function() {
    this.clear();
    this.createBackGround();
    this.createActiveObjects();
    this.stroke();
    // this.RenderSprite();
    return this;
};
cq.Wrapper.prototype.createBackGround = function (){
    this.context.fillStyle = this.BackGoundColor;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

};
cq.Wrapper.prototype.createActiveObjects = function (){
    new objectStack(this).addActiveObjectsToStage();
    for (var i = this.activeObjects.length - 1; i >= 0; i--) {
        this.activeObjects[i].extendContext();
    };
};
cq.Wrapper.prototype.PointerDown = function (PosX,PosY){
    for (var i = 0 ; i < this.activeObjects.length; i++) {
        if(this.activeObjects[i].click(PosX,PosY)){
            this.rewriteCanvas();
            break;
        }
    };
};