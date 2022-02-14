const words = [
    "four", "able", "aged",
    "army", "bank", "band",
    "base", "boat", "king", 
    "acid", "bird", "burn", 
    "camp", "bone", "down", 
    "earn", "gift"
]

const randomWord = words[Math.floor(Math.random() * words.length)].split("")

console.log("RANDOM WORD: " + randomWord)

function row1Guess() {
    let row1guess = []
    if(document.getElementById("row1letter1").value === "" 
    || document.getElementById("row1letter2").value === ""
    || document.getElementById("row1letter3").value === ""
    || document.getElementById("row1letter4").value === ""
    ) {
        window.alert("YOU NEED TO FILL THE FIRST ROW WITH A WORD")
    } else {
        row1guess.push(document.getElementById("row1letter1").value)
        row1guess.push(document.getElementById("row1letter2").value)
        row1guess.push(document.getElementById("row1letter3").value)
        row1guess.push(document.getElementById("row1letter4").value)
        // window.alert(row1guess)

        let row1letter1 = document.getElementById("row1letter1")
        let row1letter2 = document.getElementById("row1letter2")
        let row1letter3 = document.getElementById("row1letter3")
        let row1letter4 = document.getElementById("row1letter4")


        let correctGuessesRow1 = []

        row1guess.filter((letter) => {
            if(randomWord.includes(letter)) {
                correctGuessesRow1.push(letter)
            }
        })

        console.log("ROW 1 GUESS", row1guess)

        
        for(let i = 0; i < correctGuessesRow1.length; i++) {
            console.log(correctGuessesRow1[i])
            if(correctGuessesRow1[i] === row1guess[0]) {
                row1letter1.style.backgroundColor = "rgb(255, 184, 53)"
                row1letter1.style.transition = "1s"
            } else if(correctGuessesRow1[i] === row1guess[1]) {
                row1letter2.style.backgroundColor = "rgb(255, 184, 53)"
                row1letter2.style.transition = "1s"
            } else if(correctGuessesRow1[i] === row1guess[2]) {
                row1letter3.style.backgroundColor = "rgb(255, 184, 53)"
                row1letter3.style.transition = "1s"
            } else if(correctGuessesRow1[i] === row1guess[3]) {
                row1letter4.style.backgroundColor = "rgb(255, 184, 53)"
                row1letter4.style.transition = "1s"
            }
        }

        if(correctGuessesRow1[0] === row1guess[0]) {
            row1letter1.style.backgroundColor = "rgb(0, 211, 0)"
            row1letter1.style.transition = "1s"
        } 
        
        if(correctGuessesRow1[1] === row1guess[1]) {
            row1letter2.style.backgroundColor = "rgb(0, 211, 0)"
            row1letter2.style.transition = "1s"
        } 
        
        if(correctGuessesRow1[2] === row1guess[2]) {
            row1letter3.style.backgroundColor = "rgb(0, 211, 0)"
            row1letter3.style.transition = "1s"
        }
        
        if(correctGuessesRow1[3] === row1guess[3]) {
            row1letter4.style.backgroundColor = "rgb(0, 211, 0)"
            row1letter4.style.transition = "1s"
        }


        // console.log("RANDOM WORD: " + randomWord)

        // console.log("FILTERED: " + correctGuessesRow1)

    }
}

function row2Guess() {
    let row2guess = []
    if(document.getElementById("row2letter1").value === "" 
    || document.getElementById("row2letter2").value === ""
    || document.getElementById("row2letter3").value === ""
    || document.getElementById("row2letter4").value === ""
    ) {
        window.alert("YOU NEED TO FILL THE FIRST ROW WITH A WORD")
    } else {
        row2guess.push(document.getElementById("row2letter1").value)
        row2guess.push(document.getElementById("row2letter2").value)
        row2guess.push(document.getElementById("row2letter3").value)
        row2guess.push(document.getElementById("row2letter4").value)
        // window.alert(row1guess)

        let row2letter1 = document.getElementById("row2letter1")
        let row2letter2 = document.getElementById("row2letter2")
        let row2letter3 = document.getElementById("row2letter3")
        let row2letter4 = document.getElementById("row2letter4")


        let correctGuessesRow2 = []

        row2guess.filter((letter) => {
            if(randomWord.includes(letter)) {
                correctGuessesRow2.push(letter)
            }
        })

        console.log("ROW 2 GUESS", row2guess)

        for(let i = 0; i < correctGuessesRow2.length; i++) {
            console.log(correctGuessesRow2[i])
            if(correctGuessesRow2[i] === row2guess[0]) {
                row2letter1.style.backgroundColor = "rgb(255, 184, 53)"
                row2letter1.style.transition = "1s"
            } else if(correctGuessesRow2[i] === row2guess[1]) {
                row2letter2.style.backgroundColor = "rgb(255, 184, 53)"
                row2letter2.style.transition = "1s"
            } else if(correctGuessesRow2[i] === row2guess[2]) {
                row2letter3.style.backgroundColor = "rgb(255, 184, 53)"
                row2letter3.style.transition = "1s"
            } else if(correctGuessesRow2[i] === row2guess[3]) {
                row2letter4.style.backgroundColor = "rgb(255, 184, 53)"
                row2letter4.style.transition = "1s"
            }
        }

        // console.log("RANDOM WORD: " + randomWord)

        // console.log("FILTERED: " + correctGuessesRow1)

    }
}

