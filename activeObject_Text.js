function activeObject_Text (activeObject,text,textSize){
	activeObject.text = text;
	activeObject.textSize = textSize;
	activeObject.showClickPlane = false;
	activeObject.extendContext = function (){
		var fontHeight = this.textSize;//px
		this.setHeightAndLenght(this.TextWidth,fontHeight);
		StageContext = this.Stage.context;
		if ( this.showClickPlane ){
			StageContext.fillStyle = '#f00';
			StageContext.fillRect(this.PosX, this.PosY, this.height, this.width );
		}
		StageContext.fillStyle = this.fillColor;
		StageContext.textBaseline = "top";
		StageContext.font = fontHeight+"px sans-serif";
		StageContext.fillText(this.text, this.PosX, this.PosY );

	}
	this.getTextLength = function (text,textSize) {
		$('#tempElement').text(text);
		$("#tempElement").css({
	        position:   'absolute',
	        visibility: 'hidden',
	        display:    'block',
	        fontSize:   textSize,
	        fontFamily: 'sans-serif'
    	});
		return $("#tempElement").width();
	}
	activeObject.TextWidth = this.getTextLength(text,textSize);
}
