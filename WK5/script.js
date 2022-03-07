function loadCircle() {
    var circleEl = document.getElementById('circle');
    circleEl.addEventListener('click',makeCircleTransparent);
    circleEl.style.opacity=1;
}

function displayAlert(){
    var circleEl = document.getElementById('circle');
    circleEl.style.opacity=0.5;
    circleEl.style.backgroundColor='blue';
    alert('button was pressed!')
    
}

function makeCircleOpaque(){
    var circleEl = document.getElementById('circle');
    var circleOpacity= parseFloat(circleEl.style.opacity);
    circleEl.style.opacity=circleOpacity + 0.1;
       
}

function makeCircleTransparent(){
    var circleEl = document.getElementById('circle');
    var circleOpacity= parseFloat(circleEl.style.opacity);
    circleEl.style.opacity=circleOpacity - 0.1;
       
}
document.addEventListener('DOMContentLoaded', loadCircle);