var canvas = document.getElementById('bgAnimation');;
var ctx = canvas.getContext('2d');;
var dots = [];
var smallDots = [];
var image = new Image();
var x = canvas.getAttribute("data-source")
image.src = x;

var charColor = '#f9485c';
var bgColor = '#fcd700';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mousemove', createDot);

var inter = setInterval(reduceDots, 15);

function reduceDots(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	var imageHeight = canvas.height;
	var imageWidth = image.width * (canvas.height / image.height);
	ctx.drawImage(image, canvas.width-imageWidth,170, imageWidth, imageHeight);
		
	dots.forEach(function(item, index)
	{
		if(item.reduce())
		{
			dots.splice(index, 1);
		}
	});
	
	smallDots.forEach(function(item, index)
	{
		if(item.reduce())
		{
			smallDots.splice(index, 1);
		}
	});
}

function createDot(e)
{
	var dot = new Dot(ctx, 50, charColor);
	dot.setOnMousePlace(e.clientX, e.clientY);
	dots.push(dot);
	
	
	for (var i=0; i<3; i++)
	{
		var randAngle = Math.random()*Math.PI*2;
		var randDist = Math.random()*40;
		var randRadius = Math.random()*10;
		var randX = e.clientX+randDist*Math.cos(randAngle);
		var randY = e.clientY+randDist*Math.sin(randAngle); 
		
		var smallDot = new Dot(ctx, randRadius, bgColor);
		smallDot.setOnMousePlace(randX , randY );
		smallDots.push(smallDot);
	}
}

function Dot(context2d, radius, color){
	this.ctx = context2d;
	this.color = color;
	this.radius = radius;
	this.maxRadius = 30;
	this.x = 0;
	this.y = 0;
	this.enlarge = true;
	this.timer;
	
	this.setOnMousePlace = function (ix, iy) {
		this.x = ix;
		this.y = iy;
	}
	
	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fill();
		ctx.closePath();
	}
	
	this.reduce = function(ax, ay){
		if(this.radius < 1)
		{
			return 1;
		}
		
		this.draw();
		
		if (this.enlarge)
		{
			if (this.radius<this.maxRadius)
			{
				this.radius++;
			}else{
				this.enlarge = false;
			}
		}else{
			this.radius--;
		}
		
		return 0;
	}
	
	this.shuffle = function (array) {
	 for (var i = 0; i< array.length; i+=4)
	 {
		var rand = Math.random()*8
		
		if (rand>6)
		{
			for (var j = 0; j<20; j++)
			{
				array[i+j] = 0;
			}
		}
	 }
	  return array;
	}
}