console.log('Hello!')

var bottom = document.getElementById("bottom");


window.addEventListener('scroll', () => {
	if (window.scrollY >= 700) {
		bottom.classList.add('bgColor');
	} 

	else {
		bottom.classList.remove('bgColor');
	}


})
