let ast1= document.getElementById("img1");
let ast2= document.getElementById("img2");
let ast3= document.getElementById("img3");
let ast4= document.getElementById("img4");
let ast5= document.getElementById("img5");
let ast6= document.getElementById("img6");

let ship = document.getElementById("ship");

let pos = 0;
let speed = Math.random();
let speed2 = speed;

let a = [0, 1000, 30, 5, 700, 1200, 2000];

setInterval(function(){ move(ast1); }, a[Math.floor(Math.random() * a.length)]);
setInterval(function(){ move(ast2); }, a[Math.floor(Math.random() * a.length)]);
setInterval(function(){ move(ast3); }, a[Math.floor(Math.random() * a.length)]);
setInterval(function(){ move(ast4); }, a[Math.floor(Math.random() * a.length)]);
setInterval(function(){ move(ast5); }, a[Math.floor(Math.random() * a.length)]);
setInterval(function(){ move(ast6); }, a[Math.floor(Math.random() * a.length)]);

function move(asteroid){

    if(pos > 480) {
        // clearInterval(timer);
        pos = 0;
    }

    pos+= 1;
    console.log(pos);
    asteroid.style.top = pos + "px";
}

let keyStroke = null;
window.addEventListener("keydown", (event) => { keyStroke = event.key; shipMove();});

let shipPosHorizontal = 0;
let shipPosVertical = 0;

function shipMove(){
    if (event.key == "ArrowRight" && shipPosHorizontal < 92)
        shipPosHorizontal+= 2;

    else if(event.key == "ArrowLeft" && shipPosHorizontal > 0)
        shipPosHorizontal-= 2;

    else if(event.key == "ArrowUp" && shipPosVertical < 80){
        shipPosVertical+= 3;
    }

    else if(event.key == "ArrowDown" && shipPosVertical > 0){
        shipPosVertical-= 3;
    }

        ship.style.left = shipPosHorizontal+ "%";
        ship.style.bottom = shipPosVertical + "%";
    console.log(shipPosHorizontal);
    console.log(shipPosVertical);
}

if(Math.abs(pos - shipPosVertical) >= 66) alert("Game Over :(");

