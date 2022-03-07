function loadCircle() {
    var circleEl = document.getElementById('circle');
    document.addEventListener('keydown', moveElementToLeft);
    circleEl.style.opacity = 1;
}
function moveElementToLeft() {
    var circleEl = document.getElementById('circle');
    var positionFromLeft = circleEl.offsetLeft;
    circleEl.style.left = (positionFromLeft - 10) + 'px';

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