window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
    let newUl = document.createElement("ul");
    let el = document.querySelector("body").innerHTML = newUl;


    for (let pok of pokemons) {
                console.log(pok)

        let newLi = document.createElement("li");

        let newLiText = document.createTextNode(`${pok}`);
        el.innerHTML = "newLi"
        
                                console.log(newLiText)

     }
});