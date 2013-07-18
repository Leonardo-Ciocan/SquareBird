var gameLoop;
function init(){
		var root = document.getElementById("root");
		var context = root.getContext("2d");
		context.beginPath();
			context.strokeStyle  = 'black';
			context.fillRect(1,1,25,25);
			context.fill();
		context.closePath();


		root.onclick = function(){
			if(!running){
				running=true;
				clearInterval(gameLoop);
				gameLoop = setInterval(loop , 15);
			}
		}

		root.onmousedown=function(){
			down=true;
		}

		root.onmouseup=function(){
			down=false;
		}
}