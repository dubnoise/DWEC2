document.getElementById("keypress").addEventListener("keypress", keyPress);

function keyPress() {
    document.getElementById("x1").style.backgroundColor = "black";
    document.getElementById("div").style.flexDirection = "column";
    document.getElementById("x2").style.backgroundColor = "yellow";
    document.getElementById("x3").style.backgroundColor = "blue";
    document.getElementById("x4").style.backgroundColor = "green";
}

document.getElementById("keydownup").addEventListener("keydown", keyDown);
document.getElementById("keydownup").addEventListener("keyup", keyUp);

function keyDown() {
    document.getElementById("div2").style.display = "flex";
    document.getElementById("div2").style.justifyContent = "flex-end";
    document.getElementById("subdiv2").style.backgroundColor = "lightgreen";
    document.getElementById("subdiv2").style.transition = "0.5s";
}
function keyUp() {
    document.getElementById("div2").style.display = "flex";
    document.getElementById("div2").style.justifyContent = "flex-start";
    document.getElementById("subdiv2").style.backgroundColor = "brown";
    document.getElementById("subdiv2").style.transition = "0.5s";
}

document.getElementById("click").addEventListener("click", click);
document.getElementById("click2").addEventListener("dblclick", click2);
function click(){
    document.getElementById("div3").classList = "animation-div3";
    document.getElementById("div3").style.backgroundColor = "gray";
}
function click2(){
    document.getElementById("div4").classList = "animation-div4";
    document.getElementById("div4").style.backgroundColor = "gray";
}

document.getElementById("mousedownup").addEventListener("mousedown", mouseDown);
document.getElementById("mousedownup").addEventListener("mouseup", mouseUp);
function mouseDown(){
    document.getElementById("div5").style.backgroundColor = "blue";
    document.getElementById("div5").style.transition = "1s";
    document.getElementById("h5").style.color = "green";
    document.getElementById("h5").style.transition = "1s";
}
function mouseUp(){
    document.getElementById("div5").style.backgroundColor = "green";
    document.getElementById("div5").style.transition = "1s";
    document.getElementById("h5").style.color = "blue";
    document.getElementById("h5").style.transition = "1s";
}

document.getElementById("div6").addEventListener("mouseenter", mouseEnter);
document.getElementById("div6").addEventListener("mouseleave", mouseLeave);
function mouseEnter(){
    document.getElementById("div6").style.backgroundColor = "blue";
}
function mouseLeave(){
    document.getElementById("div6").style.backgroundColor = "green";
}