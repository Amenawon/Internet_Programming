function changeHeading() {
    var headerEl = document.getElementById('headertext');
    headerEl.firstChild.nodeValue = "New Heading";
}

document.addEventListener('DOMContentLoaded', changeHeading);