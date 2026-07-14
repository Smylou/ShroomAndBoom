let game = {
    currentPlayer: "Shroom"
}

function createGrid() {
    let myDiv = document.createElement("div")
    myDiv.id = "diviv"
    document.body.appendChild(myDiv)
    for (let i = 0; i < 9; i++) {
        let myDiv = document.getElementById("diviv")
        let myCase = document.createElement("div")
        myCase.id = "case" + i
        let myButton = document.createElement("button")
        myButton.id = "button" + i
        myButton.addEventListener("click", () => {
            let a = document.getElementById("case" + i)
            a.innerHTML = ""
            let myPic = document.createElement("img")
            myPic.id = "img" + i
            myPic.src = "./assets/images/" + game.currentPlayer.toLowerCase() + ".png"
            a.appendChild(myPic)
            changeCase(i)

            if (verifWin()) {
                document.body.innerHTML = ""
                let myTitle = document.createElement("Title")
                myTitle.textContent = "Le joueur "
            }
            changeTurn()
        })
        myCase.appendChild(myButton)
        myDiv.appendChild(myCase)
    }
}

function getName(id) {
    if (document.getElementById("img" + id) != null) {
        return document.getElementById("img" + id).name
    } else {
        return false
    }
}

function verifWin() {
    if (getName(0) == getName(1) && getName(0) == getName(2) && getName(0) != false) {
        titleWin(getName(0))
        return
    } else if (getName(3) == getName(4) && getName(3) == getName(5) && getName(3) != false) {
        titleWin(getName(3))
        return
    } else if (getName(6) == getName(7) && getName(6) == getName(8) && getName(6) != false) {
        titleWin(getName(6))
        return
    }

    if (getName(0) == getName(3) && getName(0) == getName(6) && getName(0) != false) {
        titleWin(getName(0))
        return
    } else if (getName(1) == getName(4) && getName(1) == getName(7) && getName(1) != false) {
        titleWin(getName(1))
        return
    } else if (getName(2) == getName(5) && getName(2) == getName(8) && getName(2) != false) {
        titleWin(getName(2))
        return
    }

    if (getName(0) == getName(4) && getName(0) == getName(8) && getName(0) != false) {
        titleWin(getName(0))
        return
    } else if (getName(2) == getName(4) && getName(2) == getName(6) && getName(2) != false) {
        titleWin(getName(2))
        return
    }

    if (getName(0) && getName(1) && getName(2) && getName(3) && getName(4) && getName(5) && getName(6) && getName(7) && getName(8)) {
        document.body.innerHTML = ""
        let myTitle = document.createElement("h1")
        myTitle.textContent = "Égalité !"
        document.body.appendChild(myTitle)
    }
}

function titleWin(name) {
    document.body.innerHTML = ""
    let myTitle = document.createElement("h1")
    myTitle.textContent = name + " a gagné !"
    document.body.appendChild(myTitle)
}

function changeCase(numPic) {
    let myImg = document.getElementById("img" + numPic)
    myImg.name = game.currentPlayer
}

function changeTurn() {
    if (game.currentPlayer == "Shroom") {
        game.currentPlayer = "Boom"
    } else {
        game.currentPlayer = "Shroom"
    }
    return game.currentPlayer
}

createGrid()