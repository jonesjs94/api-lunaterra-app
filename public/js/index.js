const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Remuevo búsqueda anterior
    const divDeck = document.getElementById("div-deck");
    while(divDeck.firstElementChild) {
        divDeck.removeChild(divDeck.lastElementChild);
    }

    // Creo consulta para realizar una petición  
    let elements = document.forms[0].elements
    let params = "";
    for(let i = 0; i < elements.length; i++) {
        if(!elements[i].value) { 
            continue;
        }
        params += elements[i].name + "=" + elements[i].value +"&";
    }
    
    // Realizo petición
    getCards(params)
        .then(cards => printCards(cards));
})

async function getCards(params) {
    const request = await fetch(`/carta?${params}`);
    const result = await request.json();
    
    return result;
}

function printCards(cards) {
    const divDeck = document.getElementById("div-deck");
    const deck = cards.cards; // Array
    
    for(let i = 0; i < deck.length; i++) {
        let img = document.createElement("img");
        let url = deck[i].assets[0].gameAbsolutePath;

        img.setAttribute("src", url);

        divDeck.appendChild(img);
    }
}