$(document).ready(function(){
	$(".opis").hide();
    $(".myButton2").click(function(){
		$(this).next(".opis").slideToggle();
		$(this).children(".myButton2>i").toggleClass("fa-rotate-180");
	})
})