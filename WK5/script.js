function clickCircle() {
    var circleEl = document.getElementById('circle');
    circleEl.addEventListener('click',displayAlert);
    circleEl.style.opacity=1;
}

function displayAlert(){
    var circleEl = document.getElementById('circle');
    circleEl.style.opacity=0.5;
    circleEl.style.backgroundColor='blue';
    alert('button was pressed!')
    
}
document.addEventListener('DOMContentLoaded', clickCircle);