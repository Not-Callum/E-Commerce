const categoriesDropDownButton = document.getElementById("categories-drop-down-button");

categoriesDropDownButton.addEventListener("click", () => {
  const catDropDownMenu = document.getElementById("categories-drop-down-menu");
  console.log(catDropDownMenu.matches(".hide"))
  if (catDropDownMenu.matches(".hide")){
    dropDownActivate(catDropDownMenu)
  }
  else{
    dropDownDeactivate(catDropDownMenu)
  }
  
})

function dropDownActivate(target){
  target.classList.remove("hide");
}

function dropDownDeactivate(target){
  target.classList.add("hide");
}