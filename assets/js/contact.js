
let prezime  = document.getElementById("prezime");
let email    = document.getElementById("mejl");
let ime      = document.getElementById("ime");
let send     = document.getElementById("posalji");
let poruka3  = document.getElementById("porukaIme");
let text     = document.getElementById("poruka");

var poruka  = document.createElement("p");
let poruka2 = document.createTextNode("This field is required!")
poruka.appendChild(poruka2);
poruka.style.color        = "#f16f7e";
poruka.style.marginBottom = "20px";


window.onload = function() {

let neZnam   = document.getElementById("header5");
neZnam.style = "display:flex";

send.setAttribute("disabled","disabled");


ime.addEventListener("blur",function(){
    this.parentElement.appendChild(poruka);

    if(this.value.length!=0){
        poruka.setAttribute("hidden","hidden");
        this.classList.remove("border-lose");
    }
    else{
        poruka.removeAttribute("hidden","hidden");
        this.classList.add("border-lose");
    }
    prikazi();
})

prezime.addEventListener("blur",function(){;
    this.parentElement.appendChild(poruka);
    if(this.value.length!=0){
        poruka.setAttribute("hidden","hidden");
        this.classList.remove("border-lose");
    }
    else{
        poruka.removeAttribute("hidden","hidden");
        this.classList.add("border-lose");
    }
    prikazi();
})

email.addEventListener("blur",function(){
    this.parentElement.appendChild(poruka);
    if(this.value.length!=0){
        poruka.setAttribute("hidden","hidden");
        this.classList.remove("border-lose");
    }
    else{
        poruka.removeAttribute("hidden","hidden");
        this.classList.add("border-lose");
    }
    prikazi();
})

text.addEventListener("blur",function(){
    this.parentElement.appendChild(poruka);
    if(this.value.length!=0){
        poruka.setAttribute("hidden","hidden");
        this.classList.remove("border-lose");
    }
    else{
        poruka.removeAttribute("hidden","hidden");
        this.classList.add("border-lose");
    }
    prikazi();
})

$("#greske").hide();
send.addEventListener("click",function(){
    let greske     = document.getElementById("greske")
    greske.classList.add("shadow-sm", "p-3", "mb-5", "bg-body", "rounded");
    

    let errorNiz   =[];
    let regEx      = /^[A-Z][a-z]{1,20}$/;
    let regExEmail = /[@]/
    if(!(regEx.test(ime.value))){
        errorNiz.push("1: Just the first letter in the first name field must be uppercase.</br>")
    }
    if(!(regEx.test(prezime.value))){
        errorNiz.push("2: Just the first letter in the last name field must be uppercase.</br>")
    }
    if(!(regExEmail.test(email.value))){
        errorNiz.push("3: You forgot the @ symbol in the email field.")
    }
    if(errorNiz.length){
        greske.innerHTML = ""
        for(let i=0;i<errorNiz.length;i++){
            greske.innerHTML += errorNiz[i];
        }
        greske.style.color       = "#f16f7e";
        $("#greske").fadeIn();
    }
    else{
        greske.innerHTML         = "Success!";
        greske.style.color       = "#28a745";
        ime.value                = "";
        prezime.value            = "";
        email.value              = "";
        text.value               = "";
        $("#greske").fadeIn();
    }
})


}

function prikazi(){
    let prezime = document.getElementById("prezime");
    let email   = document.getElementById("mejl");
    let ime     = document.getElementById("ime");
    let text    = document.getElementById("poruka"); 
    let send    = document.getElementById("posalji");

    let prikazi = prezime.value.length && ime.value.length && email.value.length && text.value.length;

    if(prikazi){
        send.removeAttribute("disabled","disabled");
    }
    else{
        send.setAttribute("disabled","disabled");
    }
}



