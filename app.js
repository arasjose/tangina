console.log('Hello!')

var header = document.querySelector("header");


window.addEventListener('scroll', () => {
	if (window.scrollY >= 700) {
		header.classList.add('active');
	} 

	else {
		header.classList.remove('active');
	}


})
