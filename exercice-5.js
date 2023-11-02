window.addEventListener("DOMContentLoaded", function(){

    let titres = ["Prenom", "Nom"]
    
        let users = [
        ["Mari", "Doucet"],
        ["Hugues", "Froger"],
        ["Alex", "Terieur"],
        ["Anne", "O'Neam"]
    ];
    
    let newTab = document.createElement("table");
    let newThead = document.createElement("thead");
    
    let el = document.querySelector("body").appendChild(newThead);
    
    let newTbody = document.createElement("tbody");



    for (let titre of titres) {
    console.log(titre)
    let newTr = document.createElement("tr");
    let newTh = document.createElement("th");

    let NewTh1Text = document.createTextNode(`${titre}`);

    let newTd = document.createElement("td");

    
    let el2 = el.appendChild(newTr).appendChild(newTh).appendChild(NewTh1Text)

     }
     
     for (let user of users) {
    console.log(user)
    let newTr = document.createElement("tr");
    let newTd = document.createElement("td");

    let NewTd1Text = document.createTextNode(`${user[0,0]}`);
    let NewTd2Text = document.createTextNode(`${user[0,1]}`);


    let el2 = el.appendChild(newTbody).appendChild(newTr).appendChild(newTd).appendChild(NewTd1Text)
    let el3 = el.appendChild(newTbody).appendChild(newTr).appendChild(newTd).appendChild(NewTd2Text)


     }
     
     
    

});