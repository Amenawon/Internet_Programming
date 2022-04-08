let xhr;
function getRecipes() {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xhr) {
        xhr.open("GET", "counties.json", true);
        xhr.send();
        xhr.onreadystatechange = showContents;
    } else {
        document.getElementById('updatemessage').innerHTML = "Could not perform the request"
    }
}

function showContents() {
    if (xhr.readyState == 4){
        if (xhr.status == 200){
            let data= JSON.parse(xhr.responseText);
                  let txt="";
            for(let i=0;i<data.counties.length; i++){
                txt+="<tr><td>"+data.counties[i].name +"</td></tr>";
            }
            document.getElementById('countylist').innerHTML=txt;
        }else{
            document.getElementById('updatemessage').innerHTML = "An Error occured:" + xhr.status;

        }
    }
}

let interval;
function loadFunction() {
    clearInterval(interval);
    interval=  setInterval(getRecipes,10);
}
document.addEventListener('DOMContentLoaded', loadFunction); 