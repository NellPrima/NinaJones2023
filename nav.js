let toggleNavStatus = false;





const toggleNav = function() {
  const toggleBtn = document.getElementsByClassName(".btn_toggle_nav");
  const showNav = document.querySelector(".nav");
  const showLinks = document.querySelectorAll(" .nav ul a");

  if (toggleNavStatus === false){
    showNav.style.visibility = "visible";

    let arrayLength = showLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      showLinks[i].style.visibility = "visible";
    }
   
    toggleNavStatus = true;

  }

  else if(toggleNavStatus === true) {
    showNav.style.visibility = "hidden";

    let arrayLength = showLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      showLinks[i].style.visibility = "hidden";
    }
    toggleNavStatus = false
    

    

}
}