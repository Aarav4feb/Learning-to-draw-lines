var canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="blue"
var lastx,currentx,lasty,currenty

var mousevent=""

canvas.addEventListener("mouseup",mu)
function mu(e){
    mousevent="mouseup"
    console.log("mouse is up")
}

canvas.addEventListener("mouseleave",ml)
function ml(e){
    mousevent="mouseleave"
    console.log("mouse is left")
}

canvas.addEventListener("mousedown",md)
function md(e){
    mousevent="mousedown"
    console.log("mouse has been clicked")
    lastx=e.clientX-canvas.offsetLeft
    lasty=e.clientY-canvas.offsetTop
}

canvas.addEventListener("mousemove",mm)
function mm(e){
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientx-canvas.offsetTop
    if (mousevent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=3
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(currentx,currenty)
        ctx.stroke()
    }
    lastx=currentx 
    lasty=currenty
}
