const deck = require("./cards.json");

const cardFunctions = {}; // Objeto donde se alojan las funciones


/**
 * Busca y devuelve las cartas que coinciden con la consulta
 * 
 * @param {object} params - objeto de la consulta 
 * @returns arreglo con las cartas coincidentes
 */
cardFunctions.findCards = (params) => {
    let cardList = [];

    // Cuando la petición lleva la key "name", busco únicamente por nombre
    if(params.name) {
        let card = cardFunctions.finddCardByName(params.name);
        cardList.push(card);
        return cardList;
    } 
    
    for(let i = 0; i < deck.length; i++) {
        let validCard = false;
        for(p in params) {
            // No se usa '===' sino '==' para no discriminar
            // integers y strings en la key "cost"
            validCard = deck[i][p] == params[p] ? true : false;
            if(!validCard)
                break;
        }
        if(validCard)
            cardList.push(deck[i]);
    }
    return cardList;
}


/**
 * Busca la carta por nombre 
 * 
 * @param {string} cardName - Nombre de la carta
 * @returns objeto de la carta coincidente
 */
cardFunctions.finddCardByName = (cardName) => {
    return deck.find(card => card.name === cardName);
}


module.exports = cardFunctions;