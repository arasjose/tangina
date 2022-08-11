console.log('Hello!')

var span = document.querySelector("strong");

window.addEventListener('scroll', () => {
	if (window.scrollY >= 50) {
		span.classList.add('active');

	} else {
		span.classList.remove('active');
	}

})

