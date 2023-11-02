window.addEventListener("DOMContentLoaded", function(){

    let newh2 = document.createElement("h2");
    let newH2Text = document.createTextNode("Le titre de la deuxième section");
    let newP = document.createElement("p");
    let newPText = document.createTextNode("Le paragraphe de la deuxième section");
    let el2 = document.querySelector("body :nth-child(3)");
    let el3 = document.querySelector("body :nth-child(3)");


    el2.appendChild(newh2).appendChild(newH2Text)
    el3.appendChild(newP).appendChild(newPText)
   

    
    
});