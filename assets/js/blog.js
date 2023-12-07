
let mainBlogContainer = document.getElementById("mainBlogContainer")
napraviBlogove(mainBlogContainer,blogovi);

function napraviBlogove(container,niz){
	
	let blog = "";
	
	for(let i=0;i<niz.length;i++){
		blog += "<div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"serv-cove rounded bg-white p-2\"><img src=\"assets/images/blog/"+niz[i].slika+"\" alt=\"\"><div class=\"p-2\"><h5 class=\"mt-3 fs-7 fw-bold\">"+niz[i].tekst+"</h5><span class=\"fs-8\">"+niz[i].datum+"</span><span class=\"float-end fs-8\"><i class=\"bi bi-person\"></i>"+niz[i].autor+"</span></div></div><button data-id=\""+niz[i].id+"\" class=\"blogButton\">Show More <i class=\"fa-solid fa-circle-plus\"></i></button></div>"
	}
	
	container.innerHTML = blog;
}

let opisBlok              = document.createElement("div");
let screenCover           = document.createElement("div");
let body                  = document.getElementById("body")

screenCover.classList.add("screenCover");
opisBlok.classList.add("infoCenter");
opisBlok.innerHTML = ""

body.appendChild(screenCover);
body.appendChild(opisBlok);
$(opisBlok).hide();
$(screenCover).hide();



$(document).ready(function(){
	$(".blogButton").click(function(){
		opisBlok.innerHTML = "<div class=\"slika\"><img src=\"assets/images/blog/"+blogovi[this.getAttribute("data-id")].slika+"\"></div><div class=\"blogDetalji\"><h5>"+blogovi[this.getAttribute("data-id")].tekst+"</h5><p>"+blogovi[this.getAttribute("data-id")].opis+"</p></div><div class=\"autor\"><span class=\"float-end fs-8\"><i class=\"bi bi-person\"></i>"+blogovi[this.getAttribute("data-id")].autor+"</span></div>"
		
		$(opisBlok).fadeIn();
		$(screenCover).fadeIn();
	})
	$(screenCover).click(function(){
		$(opisBlok).fadeOut();
		$(screenCover).fadeOut();
	})
})