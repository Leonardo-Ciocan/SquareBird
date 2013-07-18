var gameTime = 0;

var running = false;
var vx = 1;
var vy = 0.005;
var down = false;

var x = 1;
var y = 1;
function loop(){
    gameTime++;
	var root = document.getElementById("root");
	var context = root.getContext("2d");

	context.clearRect(0,0,root.width,root.height);
    

	if (y <= 0 || y >= root.height - 25)
    { 
        alert("you lost");
        vy = 0.005;
        vx =1;
        clearInterval(gameLoop)
        running = false;
        x=1;
        y=1;
        coins.splice(0,coins.length);
    }

    vy += 0.05;
    vx += 0.02;

    if (down)
    {
        vy -= 0.1;
    }

    if (x >= root.width - 25 || x <= 0)
    {
        vx *= -1;
    }

    x+=vx;
    y+=vy;


	context.beginPath();
		context.fillStyle  = 'black';
		context.fillRect(x,y,25,25);
		context.fill();
	context.closePath();

    for (var i = 0; i < coins.length; i++) {
        context.beginPath();
            context.fillStyle  = 'yellow';
            context.fillRect(coins[i].x,coins[i].y,10,10);
            context.fill();
        context.closePath();
    };

    if(gameTime%100==0) createCoin();
    console.log(gameTime);
}

var coins = new Array();

function createCoin(){
    var x = Math.random() * 1250;
    var y = Math.random() * 300;
    coins.push ({x:x , y:y});
}

