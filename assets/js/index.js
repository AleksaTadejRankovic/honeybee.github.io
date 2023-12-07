napraviProizvodePopust(medovi,proizvodi);
napraviIzjave(izjave,zaposleni);
napraviNajSkorijeBlogove(blogContainer,blogovi)

let dugmeZaMejl = document.getElementById("myButton3")
let inputZaMejl = document.getElementById("korisnikMejl")

dugmeZaMejl.addEventListener("click",function(){
	inputZaMejl.value = "";
})

function napraviProizvodePopust(red,niz){
	let proizvod = "";
	
	for(let i=0;i<niz.length;i++){
		if(niz[i].cenaPopust){
			proizvod += "<div class=\"col-lg-3 col-md-4 mb-4\"><div class=\"product bg-white p-4 text-center shadow-md\"><img src=\"assets/images/products/"+niz[i].slika+"\" alt=\"\"><div><h4 class=\"fw-bolder fs-5 mt-4\">"+niz[i].imeProizvoda+"</h4><span class=\"fw-bolder fs-4\">"+niz[i].cenaPopust+"</span> <span class=\"text-muted text-decoration-line-through\">"+niz[i].cena+"</span></div><div 		class=\"d-inline-block mt-3\"><a href=\"contact.html\"><button class=\"btn myButton px-5\">Buy Now</button></a></div></div></div>"
		}
	}
	

	red.innerHTML = proizvod;
}

function napraviIzjave(container,niz){
    let izjaveFun = "";
	
	for(let i=0;i<niz.length;i++){
		izjaveFun += "<div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"serv-cove shadow-md rounded bg-white p-3\"><div class=\"prf row mb-3\"><div class=\"col-3\"><img class=\"rounded-pill\" src=\"assets/images/testimonial/"+niz[i].slika+"\" alt="+i+"></div><div class=\"col-9 align-self-center\"><h6 class=\"mb-0 fw-bolder\">"+niz[i].ime+"</h6><span>"+niz[i].zvanje+"</span></div></div><div class=\"det text-center\"><p class=\"fs-7 fst-italic\">"+niz[i].izjava+"</p></div></div></div>"
	}
	container.innerHTML = izjaveFun;
}


function napraviNajSkorijeBlogove(container,niz){
	
	let nizKonvertovaniDatumi = [];

	for(let i=0;i<blogovi.length;i++){
		nizKonvertovaniDatumi.push(new Date(niz[i].datum));
	}
	
	let blogoviNovi = ""
	
	let najveciMax  = nizKonvertovaniDatumi[0];
	let srednjiMax  = "0";
	let najmanjiMax = "0";

	for(let i=1;i<nizKonvertovaniDatumi.length;i++){
		if(nizKonvertovaniDatumi[i] > najveciMax){
			najveciMax = nizKonvertovaniDatumi[i];
		}
	}
	
	for(let i=0;i<nizKonvertovaniDatumi.length;i++){ 
		if(nizKonvertovaniDatumi[i] < najveciMax && nizKonvertovaniDatumi[i] > srednjiMax){
			srednjiMax = nizKonvertovaniDatumi[i];
		}
	}
	
	for(let i=0;i<nizKonvertovaniDatumi.length;i++){
		if(nizKonvertovaniDatumi[i] < srednjiMax && nizKonvertovaniDatumi[i] > najmanjiMax){
			najmanjiMax = nizKonvertovaniDatumi[i];
		}
		
	}
	
	
	for(let i=0;i<niz.length;i++){
		
		let nizDeloviDatuma = niz[i].datum.split(" ");
		let datumZaPetlju   = new Date(nizDeloviDatuma[0]+" "+nizDeloviDatuma[1]+" "+nizDeloviDatuma[2])
				
		if(datumZaPetlju.getTime()==najveciMax.getTime() || datumZaPetlju.getTime()==srednjiMax.getTime() || datumZaPetlju.getTime()==najmanjiMax.getTime()){
			blogoviNovi += "<div class=\"col-lg-4 col-md-6 mb-4\"><div class=\"serv-cove rounded bg-white p-2\"><img src=\"assets/images/blog/"+niz[i].slika+"\"alt=\"\"><div class=\"p-2\"><h5 class=\"mt-3 fs-7 fw-bold\">"+niz[i].tekst+"</h5><span class=\"fs-8\">"+niz[i].datum+"</span><span class=\"float-end fs-8\"><i class=\"bi bi-person\"></i>"+niz[i].autor+"</span></div></div></div>"
		}
	}
	
	container.innerHTML = blogoviNovi;
}


