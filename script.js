const actualitzarBtn = document.getElementById("actualitzar")
let numEquips
const arrTeams = []
const arrMatches = []
const main = document.getElementById('main')

const guardar = () => {
    numEquips = document.getElementById('num').value;
    console.log(numEquips)
}

const generateMatches = () => {
    for (let i = 0; i < arrTeams.length; i += 2) {
        if (arrTeams[i + 1]) {
            arrMatches.push(arrTeams[i] + " vs " + arrTeams[i + 1]);
        } else {
            arrMatches.push(arrTeams[i] + " descansa"); // O alguna otra opción
        }
    }
}

const generateTeams = () => {
    if (numEquips < 33 && numEquips > 1) {
        while (arrTeams.length > 0) {
            arrTeams.pop();
        }
        for (let i = 0; i < numEquips; i++) {
            arrTeams.push("Equip " + (i + 1))
        }
    }
    else {
        alert("El nombre d'equips ha d'estar entre 2 i 32")
    }
}


const createTable = (arr) => {
    const newArr = arr.map(e => createCards(e))
    newArr.forEach(e => main.appendChild(e))
}
const createCards = (element) => {
    const card = document.createElement("div")
    const match = document.createElement("h3")
    match.textContent = element
    card.appendChild(match)
    return card;

}


const actu = () => {
    generateTeams();
    arrMatches.length = 0;
    main.innerHTML = "";
    generateMatches();
}




