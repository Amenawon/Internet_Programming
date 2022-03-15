function loadCircle() {
    var circleEl = document.getElementById('circle');
    circleEl.addEventListener('click', moveElementToLeft)
    circleEl.style.opacity = 1;
}
function keyDownLoadEvent() {
    var circleEl = document.getElementById('circle');
    document.addEventListener('keydown', keyDownEvent);
    circleEl.style.opacity = 1;
}
let interval
function keyDownEvent(event) {
    clearInterval(interval);
    if (event.keyCode == 37) {
    interval=  setInterval(moveElementToLeft,10);
      //to clear a timer clearInterval(timer)
    }
    else if (event.keyCode == 39) { 
        interval=  setInterval(moveElementToRight,10);
    }
    else if (event.keyCode == 40) { 
        interval= setInterval(moveElementToBottom,10);
    }
    else if (event.keyCode == 38) { 
        interval= setInterval(moveElementToTop,10);
    }
}
function moveElementToLeft() {
    var circleEl = document.getElementById('circle');
    var positionFromLeft = circleEl.offsetLeft;//offsetleft gives the current position
    circleEl.style.left = (parseInt(positionFromLeft) - 1) + 'px';

}
function moveElementToRight() {
    var circleEl = document.getElementById('circle');
    var positionFromLeft = circleEl.offsetLeft;//offsetleft gives the current position
    circleEl.style.left = (parseInt(positionFromLeft) + 1) + 'px';

}
function moveElementToTop() {
    var circleEl = document.getElementById('circle');
    var positionFromTop = circleEl.offsetTop;//offsetleft gives the current position
    circleEl.style.top = (parseInt(positionFromTop) - 1) + 'px';

}
function moveElementToBottom() {
    var circleEl = document.getElementById('circle');
    var positionFromBottom = circleEl.offsetTop;//offsetleft gives the current position
    circleEl.style.top = (parseInt(positionFromBottom) + 1) + 'px';

}
function displayAlert() {
    var circleEl = document.getElementById('circle');
    circleEl.style.opacity = 0.5;
    circleEl.style.backgroundColor = 'blue';
    alert('button was pressed!')

}

function makeCircleOpaque() {
    var circleEl = document.getElementById('circle');
    var circleOpacity = parseFloat(circleEl.style.opacity);
    circleEl.style.opacity = circleOpacity + 0.1;

}

function setTimer() {
    setInterval(makeCircleTransparent, 100)
}
function makeCircleTransparent() {
    var circleEl = document.getElementById('circle');
    var circleOpacity = parseFloat(circleEl.style.opacity);
    circleEl.style.opacity = circleOpacity - 0.1;

}
document.addEventListener('DOMContentLoaded', loadCircle);
document.addEventListener('DOMContentLoaded', keyDownLoadEvent); 