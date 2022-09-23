const links=document.querySelectorAll(".link");
const portfolioNav=document.querySelector("#portfolio-nav");

for (var i = 0; i < links.length; i++) {
	links[i].onclick=(event)=>{
		for (var i = 0; i < links.length; i++) {
			links[i].classList.remove("active");
		}
		event.target.classList.add("active");
		portfolioNav.classList.remove("show");
	}
}


