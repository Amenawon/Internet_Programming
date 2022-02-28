function displayText(){
    var element =document.getElementById('inputtext');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
}

function myLoadFunction(){
    var element=document.getElementById('inputtext');
    element.addEventListener('keyup', displayText)
}
document.addEventListener('DOMContentLoaded', myLoadFunction);