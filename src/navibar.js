let iframe = document.getElementById("iframeBox");
let options = document.getElementsByClassName("option");
let isOpen = "";




function setWeb(e){
    let target = e.target;
    let id = target.id + ".html";
    if(isOpen == target.id){
        iframe.src = "";
        isOpen = "";
        return;
    }
    iframe.src = id;
    isOpen = target.id;
  
}

for(let i=0;i<options.length;i++){
    options[i].addEventListener("click",setWeb);
}