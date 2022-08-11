var lastScroll,navBar;
lastScroll = 0;
navBar = document.getElementById("bottom");

window.onscroll = function(){
	var currentScroll = pageYOffset; 
	//console.log(scurrentScroll)


	if(currentScroll - lastScroll > 0){
		navBar.setAttribute("class" , "hideNav");
		//console.log("scroll down")
	}else{
		navBar.setAttribute("class" , "showNav");
		//console.log("scroll up")
	}

	lastScroll = currentScroll;
}




