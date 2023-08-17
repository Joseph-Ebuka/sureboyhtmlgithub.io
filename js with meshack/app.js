

function box1() {
  content.style.left = "0% ";
}
function box2() {
  content.style.left = "-70%";
}

function more(){
    if (secondPara.style.display==="none"){
      secondPara.style.display="block"
      morebtn.innerHTML = "show less"
    }else{
      secondPara.style.display="none"
      morebtn.innerHTML = "show more"
    }
}
