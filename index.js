

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


function loginAttempt(){
  let loginName = document.getElementById("login-detail").value;
  const data = {name: loginName};

  fetch('http://127.0.0.1:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    "body": JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => handleLoginSuccess(data))
  .catch((error) => console.error('Error:', error));
}

function handleLoginSuccess(data){
  if (data["status"] == true){
    console.log("this is a user")
  }
  else{
    alert("Not a real user!")
  }
}