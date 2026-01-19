const actualitzarBtn = document.getElementById("actualitzar")
let numEquips
let currentTeams = []  
let nextRoundTeams = [] 
let arrMatches = []
const main = document.getElementById('main')

const guardar = () => {
     numEquips = Number(document.getElementById('num').value)
}

const generateMatches = () => {
    arrMatches.length = 0

    for (let i = 0; i < currentTeams.length; i += 2) {
        const team1 = document.createElement("div")
        team1.classList.add("team")
        team1.textContent = currentTeams[i]

        if (currentTeams[i + 1]) {
            const team2 = document.createElement("div")
            team2.classList.add("team")
            team2.textContent = currentTeams[i + 1]
            arrMatches.push([team1, team2])
        } else {
            arrMatches.push([team1]) 
            nextRoundTeams.push(currentTeams[i])
        }
    }
}

const generateTeams = () => {
    if (numEquips >= 2 && numEquips <= 32) {
        currentTeams = []
        for (let i = 0; i < numEquips; i++) {
            currentTeams.push("Equip " + (i + 1))
        }
    } else {
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



const addTeamListeners = () => {
    const teams = document.querySelectorAll('.team')

    teams.forEach(team => {
        team.addEventListener('click', () => {
            if (team.classList.contains('winner')) return

            team.classList.add('winner')
            nextRoundTeams.push(team.textContent)

            const parent = team.parentElement
            parent.querySelectorAll('.team').forEach(t => {
                t.style.pointerEvents = "none"
            })

            checkRoundEnd()
        })
    })
}


const checkRoundEnd = () => {
    const totalMatches = arrMatches.length

    if (nextRoundTeams.length === totalMatches) {
        setTimeout(nextRound, 800)
    }
}
const render = () => {
    main.innerHTML = ""
    generateMatches()
    createTable(arrMatches)
    addTeamListeners()
}

const nextRound = () => {
    if (nextRoundTeams.length === 1) {
        alert(`🏆 Campeón: ${nextRoundTeams[0]}`)
        return
    }

    currentTeams = [...nextRoundTeams]
    nextRoundTeams = []
    render()
}

actualitzarBtn.addEventListener('click', () => {
    guardar()
    generateTeams()
    nextRoundTeams = []
    render()
})