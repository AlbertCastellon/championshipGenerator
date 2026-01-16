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
        const team1 = document.createElement("div")
        const team2 = document.createElement("div")
        team1.classList.add("team")
        team2.classList.add("team")
        if (arrTeams[i + 1]) {
            team1.textContent = arrTeams[i]
            team2.textContent = arrTeams[i + 1]
            arrMatches.push([team1, team2]);
        } else {
            team1.textContent = arrTeams[i]
            arrMatches.push([team1]); // O alguna otra opción
        }
    }
}

const generateTeams = () => {
    if ((numEquips < 33 && numEquips > 1)) {
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
    card.classList.add('card')
    const freeMatch = document.createElement("div")
    freeMatch.textContent = "descansa"
    card.appendChild(element[0])
    if(element[1]) {
        card.appendChild(element[1])
    }else {
        card.appendChild(freeMatch)
    }
    
    return card;

}


const render = () => {
    generateTeams();
    arrMatches.length = 0;
    main.innerHTML = "";
    generateMatches();
   
    createTable(arrMatches)
    const teams = document.querySelectorAll('.team')
    teams.forEach(e => e.addEventListener('click', () => {
        e.classList.add("winer")
    }))
}




