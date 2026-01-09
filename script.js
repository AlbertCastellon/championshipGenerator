const actualitzarBtn = document.getElementById("actualitzar")
let numEquips
const guardar = () => {
    numEquips = document.getElementById('num').value;
    console.log(numEquips)
}
const arrTeams = []
console.log(numEquips)

const generateTeams = () => {
    for(let i = 0; i < numEquips; i++){
        arrTeams.push("Equip " + (i+1))
    }
    console.log(arrTeams)
}

