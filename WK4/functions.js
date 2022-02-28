function print5() {
    console.log(1); 
    console.log(2); 
    console.log(3);
    console.log(4);
    console.log(5);
}
print5();
print5();

function renameHeader(){
    var headerEl = document.getElementById('headertext');
    var paragraphEl = document.getElementById('paragraphtext');
    headerEl.firstChild.nodeValue = "New Heading";
    paragraphEl.firstChild.nodeValue="This paragraph has changed its value"
}

document.addEventListener('DOMContentLoaded', renameHeader);