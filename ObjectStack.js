function objectStack (Stage){
	this.Stage = Stage;
	this.addActiveObjectsToStage = function (){
		this.HeadLine(); 
	}
	this.HeadLine = function (){
		headLine = new activeObjectRect(this.Stage,'Headline');
		headLine.setFillColor(this.Stage.ButtonColor);
		if (this.Stage.IsATouchDevice()){
			ElementHeight = this.Stage.canvas.height*0.1;
	    	headLine.setTopLeft(0,this.Stage.canvas.height-ElementHeight);
	    	headLine.setHeightAndWidth(ElementHeight,this.Stage.canvas.width);
		}else{
			ElementHeight = 30;
	    	headLine.setTopLeft(0,0);
	    	headLine.setHeightAndWidth(ElementHeight,this.Stage.canvas.width);
		}
    	headLine.action = this.AlertObject;
    	headLine.addToStage();
	}
	this.AlertObject = function (){
    	    innerObject = new activeObjectRect(this.Stage,'innerObject');
    	    innerObject.setFillColor('#ff00ff');
    	    innerObject.setTopLeft(100 ,100);
    	    innerObject.action = function (){
    	        this.removeFromStage();
    	    };
    	    innerObject.addToStage();
    	    Stage.rewriteCanvas();

	}
}