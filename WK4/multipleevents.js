function myHeaderText(){
    var headerEl = document.getElementById('headertext');  
    headerEl.firstChild.nodeValue="New Header";
}
function changeParagraphText(){ 
    var paragraphEl = document.getElementById('paragraphtext'); 
    paragraphEl.firstChild.nodeValue="This paragraph has changed its value";
}
function changeHeaderColor(){
    var headerEl = document.getElementById('headertext');  
    headerEl.style.backgroundColor="orange";
}
function changeParagraphColor(){
    var headerEl = document.getElementById('headertext');  
    headerEl.style.backgroundColor="blue";
}
function myLoadFn(){
    var element=document.getElementById('headertext');
    element.addEventListener('click', myHeaderText)
    element.addEventListener('mouseenter', changeHeaderColor)

    var paragraphEl=document.getElementById('paragraphtext');
    paragraphEl.addEventListener('click', changeParagraphText)
    paragraphEl.addEventListener('mouseenter', changeParagraphColor)
}

document.addEventListener('DOMContentLoaded', myLoadFn);