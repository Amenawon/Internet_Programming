function myHeaderText(){
    var headerEl = document.getElementById('headertext');  
    headerEl.firstChild.nodeValue="New Header"
}
function changeParagraphText(){ 
    var paragraphEl = document.getElementById('paragraphtext'); 
    paragraphEl.firstChild.nodeValue="This paragraph has changed its value"
}
function myLoadFn(){
    var element=document.getElementById('headertext');
    element.addEventListener('click', myHeaderText)

    var paragraphEl=document.getElementById('paragraphtext');
    paragraphEl.addEventListener('click', changeParagraphText)
}

document.addEventListener('DOMContentLoaded', myLoadFn);