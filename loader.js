var loaderr = document.querySelector("loaderr")

window.addEventlistener("load", vanish);

function vanish(){
	loaderr.classList.add("disappearr");
}