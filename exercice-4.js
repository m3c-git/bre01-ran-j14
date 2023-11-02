window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
    let newUl = document.createElement("ul");
    let el = document.querySelector("body").appendChild(newUl);


    for (let pok of pokemons) {
                console.log(pok)

        let newLi = document.createElement("li");

        let newLiText = document.createTextNode(`${pok}`);
        let el2 = el.appendChild(newLi).appendChild(newLiText)
                                console.log(newLiText)

     }
});