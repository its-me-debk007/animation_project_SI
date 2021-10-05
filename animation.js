let ast1= document.getElementById("img1");
let ast2= document.getElementById("img2");
let ast3= document.getElementById("img3");
let ast4= document.getElementById("img4");
let ast5= document.getElementById("img5");
let ast6= document.getElementById("img6");

ast1.style.position = "absolute";
ast2.style.position = "absolute";
ast3.style.position = "absolute";
ast4.style.position = "absolute";
ast5.style.position = "absolute";
ast6.style.position = "absolute";

let pos = 0;
// specimen.style.left = pos + 'px';
ast1.style.top = pos + 'px';
ast2.style.top = pos + 'px';
ast3.style.top = pos + 'px';
ast4.style.top = pos + 'px';
ast5.style.top = pos + 'px';
ast6.style.top = pos + 'px';

let speed = Math.round(Math.random()*20);
let timer = setInterval(move, speed);

function move(){

    if(pos == 510) {
        // clearInterval(timer);
        pos = 0;
    }

    pos++;
    ast1.style.top = pos + 'px';
    ast2.style.top = pos + 'px';
    ast3.style.top = pos + 'px';
    ast4.style.top = pos + 'px';
    ast5.style.top = pos + 'px';
    ast6.style.top = pos + 'px';

}

