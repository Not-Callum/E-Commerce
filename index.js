
function loginPopUp(){
  
  if (window.getComputedStyle(document.getElementById("popup-login")).getPropertyValue("display") == "none"){
    console.log(window.getComputedStyle(document.getElementById("popup-login")).getPropertyValue("display"))
    document.getElementById("popup-login").style.display = "flex";
  }
  
  
}

function closeLoginPopUp(e){
  if (e == window.event){
    e.cancelBubble = true;
  }
  if (e.stopPropagation){
    e.stopPropagation();
  }
  if (window.getComputedStyle(document.getElementById("popup-login")).getPropertyValue("display") != "none"){
    console.log("something happen")
    document.getElementById("popup-login").style.display = "none";
  }
}