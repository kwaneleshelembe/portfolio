let links=document.querySelectorAll(".link");

for (var i = 0; i < links.length; i++) {
	links[i].onclick=(event)=>{
		for (var i = 0; i < links.length; i++) {
			links[i].classList.remove("active");
		}
		event.target.classList.add("active");
	}
}