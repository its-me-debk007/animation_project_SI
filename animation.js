var screen;
screen = document.getElementById("container");
screen.style.color = "red";
screen.style.backgroundColor = "black";
screen.style.width = "1000px";
screen.style.height = "1000px";

var specimen = document.getElementById("specimen");
specimen.style.backgroundColor = "white";
specimen.style.width = "5%";
specimen.style.height = "5%";

var pos = 10;
specimen.style.left = pos + 'px';
specimen.style.top = pos + 'px';

var time = setInterval(move, 10);

function move(){
    if(pos == 950) {
        clearInterval(time);
        return;
    }
    pos++;
    specimen.style.left = pos + 'px';
    specimen.style.top = pos + 'px';
}