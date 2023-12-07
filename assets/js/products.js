
napraviProizvode(medovi,proizvodi);

function napraviProizvode(red,niz){
	let proizvod = "";
	
	for(let i=0;i<niz.length;i++){
		if(niz[i].cenaPopust){
			proizvod += "<div class=\"col-lg-3 col-md-4 mb-4\"><div class=\"product bg-white p-4 text-center shadow-md\"><img src=\"assets/images/products/"+niz[i].slika+"\" alt=\"\"><div><h4 class=\"fw-bolder fs-5 mt-4\">"+niz[i].imeProizvoda+"</h4><span class=\"fw-bolder fs-4\">"+niz[i].cenaPopust+"</span> <span class=\"text-muted text-decoration-line-through\">"+niz[i].cena+"</span></div><div class=\"d-inline-block mt-3\"><a href=\"contact.html\"><button class=\"btn myButton px-5\">Buy Now</button></a></div></div><button class=\"myButton2\">Show more details <i class=\"fa-solid fa-angle-up fa-rotate-180\"></i></button><div class=\"opis\"><p>"+niz[i].opis+"</p></div></div>"
		}
		else{
			proizvod += "<div class=\"col-lg-3 col-md-4 mb-4\"><div class=\"product bg-white p-4 text-center shadow-md\"><img src=\"assets/images/products/"+niz[i].slika+"\" alt=\"\"><div class=\"d-inline-block\"><h4 class=\"fw-bolder fs-5 mt-4\">"+niz[i].imeProizvoda+"</h4><span class=\"fw-bolder fs-4\">"+niz[i].cena+"</span></div><div class=\"d-inline-block mt-3\"><a href=\"contact.html\"><button class=\"btn myButton px-5\">Buy Now</button></a></div></div><button class=\"myButton2\">Show more details <i class=\"fa-solid fa-angle-up fa-rotate-180\"></i></button><div class=\"opis\"><p>"+niz[i].opis+"</p></div></div>"
		}
	}
	
	red.innerHTML = proizvod;
}
	

