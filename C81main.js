canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")
color = "red"

ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 2
ctx.arc(100, 400, 60, 0, 2*Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color").value 
    console.log(color)
    mouseX=e.clientX-canvas.offsetLeft
    mouseY=e.clientY-canvas.offsetTop
    console.log("x="+mouseX+",y="+mouseY)
    // concatenation
    circle(mouseX,mouseY)
}

function circle(mouseX,mouseY){
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI)
    ctx.stroke()
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}