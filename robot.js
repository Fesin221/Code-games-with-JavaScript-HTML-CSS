// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("head").style.transform = "rotate(15deg)";
// document.getElementById("righteye").style.border = "4px yellow dotted";
// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// document.getElementById("body").style.color = "#FF0000";
// document.getElementById("head").style.borderTop = "5px solid black";

// document.getElementById("head").style.transform = "rotate(-15deg)";
// document.getElementById("nose").style.borderRadius = "50%";
// document.getElementById("rightarm").style.backgroundColor = "green";
// document.getElementById("mouth").style.backgroundColor = "pink";

let rightEye  = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
// document.getElementById("righteye").addEventListener("click",moveUpDown);

function moveUpDown(e) {
    let robotPart = e.target;
    let t = 0;

    let animation = setInterval(frame, 100); //call the function frame every 10 milliseconds

    function frame() {
        robotPart.style.top = t + "%";
        t++;
        if(t==20) {
            clearInterval(animation);
        }
    }

}
