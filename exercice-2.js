window.addEventListener("DOMContentLoaded", function(){

    let el = document.querySelector("section");
    let newh2 = document.createElement("h2");
    let newH2Text = document.createTextNode("Le titre de la deuxième section");
    let newP = document.createElement("p");
    let newPText = document.createTextNode("Le paragraphe de la deuxième section");
    let el2 = document.querySelector("h2");

    
    el.appendChild(newh2).appendChild(newH2Text);


    
    
});