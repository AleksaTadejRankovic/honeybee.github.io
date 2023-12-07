let menu    = document.getElementById("menu");
let linkovi = [
    {ime:"Home",      link:"index.html"},
    {ime:"Products",  link:"products.html"},
    {ime:"Blog",      link:"blog.html"},
    {ime:"Contact Us",link:"contact.html"},
    {ime:"Author",    link:"autor.html"}
];

let medovi    = document.getElementById("medProdaja");

let proizvodi = [
	{slika:"p1.png", imeProizvoda:"Manuka Honey"     , cenaPopust:"85$", cena:"105$", opis:"The mānuka tree is indigenous to New Zealand and some parts of coastal Australia, but is today produced globally. Used as a sugar substitute, it has a strong, earthy aroma and flavour. The word mānuka is the Māori name of the tree; however, as with many Māori words, the older spelling manuka (without a macron) remains relatively common in English." },
	
	{slika:"p2.png", imeProizvoda:"Raw Honey"        , cenaPopust:"78$", cena:"100$", 
	
	opis:"Some people believe that raw honey is better than pasteurized honey sold in bear-shaped plastic squeeze bottles at supermarkets which lack the health and taste benefits of cloudy-looking raw honey—preferably with a big chunk of honeycomb, and maybe even broken bee wing fragments, floating in it." },
	
	{slika:"p3.png", imeProizvoda:"Wild Flower Honey", cenaPopust:"80$", cena:"102$", 
	
	opis:"Wild flower is a type of honey which has a distinctive flavor or other attribute due to its being predominantly from the nectar of a single plant species." },
	
	{slika:"p4.png", imeProizvoda:"Queen Bee Honey"  ,       			 cena:"90$",  
	
	opis:"This is one of the most popular honey varieties in Greece, made by bees that collect nectar from thyme flowers. It is commonly found in Mediterranean countries, including Greece, where thyme honey is particularly popular. It has a light colour and a strong, herbal flavour." },
	
	{slika:"p5.png", imeProizvoda:"Milk Shade Honey",  cenaPopust:"50$", cena:"102$", 
	
	opis:"This light-coloured honey is produced by bees that collect nectar from acacia trees. It has a mild, sweet flavour and is popular in tea and baked goods." },
	
	{slika:"p6.png", imeProizvoda:"Gem Honey",               			 cena:"102$", 
	
	opis:"This honey is produced by bees that collect nectar from clover flowers. It has a light colour and a mild, sweet flavour." },
	
	{slika:"p1.png", imeProizvoda:"Manuka Honey Deluxe",     			 cena:"200$", 
	
	opis:"This honey is made by bees that collect nectar from lavender flowers. It has a light,  medium sweet taste and the colour may vary from white to very light amber or gold." },
	
]

let izjave    = document.getElementById("izjave");

let zaposleni = [
	{ime:"Vinoth Parkash", zvanje:"CEO Fabric Nation", slika:"member-01.jpg" , izjava:"We create the best honey around come join us!"},
	{ime:"Jackson Daniel", zvanje:"CEO Notitech",      slika:"member-02.jpg" , izjava:"Premium quality honey at a fair price."},
	{ime:"Praveen Thaney", zvanje:"Admin Vintech",     slika:"member-03.jpg" , izjava:"Never worked at a more relaxing environment."},
];

let blogContainer       = document.getElementById("blogovi");
let blogContainerFooter = document.getElementById("blogoviFoot");

let blogovi       = [
	{id:0, slika:"b1.jpg", opis:"Place your bottle of honey with its lid off inside a pot. Pour warm water (water should not exceed 110º F) into the pan and allow to sit until the honey melts. In five-minute intervals remove your bottle from the pan, stir the honey and return it to the warm water.",                                                     tekst:"New ways of mixing old honey with new honey!",  datum:"23 May 2022",      autor:"Sam Anderson"},
	
	
	{id:1, slika:"b2.jpg", opis:"Including gloves, gowns, shoe covers, head covers, masks, respirators, eye protection, face shields, and goggles. Gloves help protect you when directly handling potentially infectious materials or contaminated surfaces. Gowns help protect you from the contamination of clothing with potentially infectious material",      tekst:"Our new protective equipment har arrived!",   datum:"21 March 2023",    autor:"Mike Taylor"},
	
	
	{id:2, slika:"b3.jpg", opis:"One source claims the total amount you need to spend with a hive comes in at around 15-30 hours a year. Another says that half an hour a week should be just fine for a beginner. There's really no perfect answer – this depends on a number of factors, including your willingness to get out there and do the right thing!",  tekst:"Today is beehive upkeep day!",    
	   datum:"21 December 2021", autor:"David Taylor"},
	   
	
	{id:3, slika:"b4.jpg", opis:"Friends of the Honey Bee' is a BBKA initiative aimed at reaching out to schools and other community groups to encourage them to become more bee friendly and aware of the importance of all pollinators.",  
	                                                                                   tekst:"Try honey from our friends at BeeHoney!",      			
	   datum:"5 March 2023",     autor:"Ike Lauren"},
	   
	
	{id:4, slika:"b5.jpg", opis:"Beeswax is a natural byproduct of honey production and is collected by beekeepers by scraping or cutting the wax caps off honeycomb frames, which exposes the honey for harvesting. This process does not harm the bees or the comb, and the bees will rebuild and refill the comb with honey",                                 tekst:"New beewax scrapers",
	   datum:"9 July 2023",      autor:"Sam Anderson"},
	   
	
	{id:5, slika:"b6.jpg", opis:"The water that our bee's use is getting worse and worse at our old department.</br>So we are going to a new one near Hakel city airport",                                                  tekst:"Our collecting department is moving to a new place!",
	   datum:"10 April 2023",    autor:"Josh Breck"},
	   
	
	{id:6, slika:"b7.jpg", opis:"Water from the Laura river is getting polluted by the new factory that has been working near us. Our bee's need the water clean to stay healthy.</br>So we will be moving to a new department soon.", 
	                                                                                   tekst:"This season is goind to be harder than the last",
	   datum:"26 Avgust 2023",   autor:"Ike Lauren"},
	   
	
	{id:7, slika:"b8.jpg", opis:"Our brand new high quality boxes from DownTownHoney have just arived!", 
	                                                                                   tekst:"New honeycomb boxes!",
	   datum:"15 March 2022",    autor:"Stan Smith"},
	   
	
	{id:8, slika:"b9.jpg", opis:"Water from the Laura river is getting polluted by the new factory that has been working near us. So until we move, their will be less Quenn Honey on sale.",                                 tekst:"Less Queen Honey this year",
	   datum:"13 June 2021",     autor:"Ike Lauren"},
	   
	
	{id:9, slika:"b10.jpg",opis:"New Salsify dandelion flower.</br>Salsify is also called goat's beard. The leaves are grass-like and the flower head is similar to dandelion but much larger. The seed head also resembles dandelion but again is much larger and on the gray side", 
																			  tekst:"New species of dandelion flower",      					
	   datum:"1 February 2022",  autor:"Ike Lauren"},
	   
];


napraviListu(menu,linkovi);
napraviNajSkorijeBlogoveZaFooter(blogContainerFooter,blogovi)

function napraviListu(meni,niz){
    var meniLista  = "<ul class=\"fw-bold float-end nacul fs-7\">"

    for(let i=0;i<niz.length;i++){
        meniLista += "<li class=\"float-start p-3 px-4\"><a href="+niz[i].link+">"+niz[i].ime+"</a></li>";
    }

    meniLista     += "</ul>"
    meni.innerHTML = meniLista;
}

function napraviNajSkorijeBlogoveZaFooter(container,niz){
	
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
			blogoviNovi += "<a href=\"blog.html\"><div class=\"post-row\"><div class=\"image\"><img src=\"assets/images/blog/"+niz[i].slika+"\" alt=\"\"></div><div class=\"detail\"><p>"+niz[i].tekst+"</p></div></div>"
		}
	}
	
	container.innerHTML += blogoviNovi;
}

window.onload = function(){
	let neZnam   = document.getElementById("header5");
	neZnam.style = "display:flex";
}


