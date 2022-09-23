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


const cover=document.querySelector("#cover");
const navbar=document.querySelector("nav");

const options={rootMargin:"-150px 0px 0px 0px"}

const coverObserver=new IntersectionObserver((entries)=>{
	if(entries[0].isIntersecting){
		navbar.classList.remove("black-nav");
	}else{
		navbar.classList.add("black-nav")
	}
},options);

coverObserver.observe(cover);
