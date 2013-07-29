function activeObjectRect (Stage,Name) {
	this.Stage = Stage;
	this.Name = Name;
	this.text = 'emptyString';
	this.fillColor = '#ffffff' // default white
	this.PosX = 0;
	this.PosY = 0;
	this.height = 100;
	this.width = 100;
	this.action = function (){alert('default action:'+this.Name);return false;};
	this.whoAmI = function (){return this.Name;};
	this.refresh = function () {this.Stage.rewriteCanvas();}
	this.setFillColor = function ( htmlColor ){
		this.fillColor = htmlColor;
		return this;
	};
	this.setTopLeft = function ( x,y ){
		this.PosX = x;
		this.PosY = y;
		return this;
	}
	this.setHeightAndLenght = function ( height,width ){
		this.height = height;
		this.width = width;
		return this;
	}
	this.click = function ( PosX,PosY ){
		if(    PosX > this.PosX 
			&& PosX < (this.PosX+this.height) 
			&& PosY > this.PosY 
			&& PosY < (this.PosY+this.width)
		){
			this.action();
        	return true;
    	}else{
    		return false;
    	}
	};
	this.extendContext = function(){
		this.Stage.context.fillStyle = this.fillColor;
    	this.Stage.context.fillRect(this.PosX, 
    							    this.PosY, 
    							    this.height, 
    							    this.width
    	);
	};
	this.addToStage = function (){
		if(!this.Stage.getElementByName(this.Name)){
	    	this.Stage.activeObjects.push(this);
		}
    	return this;
	};
	this.removeFromStage = function(){
		tempArray = new Array();
		for (var i = 0; i < this.Stage.activeObjects.length; i++) {
			if( this.Stage.activeObjects[i] != this ) {
				tempArray.push(this.Stage.activeObjects[i]);
			}
		};
		this.Stage.activeObjects = tempArray;
		this.Stage.rewriteCanvas();	
	};
}