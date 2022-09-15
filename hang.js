// selectores
let words = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let board = document.getElementById("hang").getContext("2d"); // canvas en html
let secretWord = "";

// Palabra Secreta
function chooseSecretWord(){
    let word = words[Math.floor(Math.random() * words.length)]
    secretWord = word
    console.log(secretWord)
}

// iniciar juego
function startGame(){
    document.getElementById("startGame").style.display = "none";

    chooseSecretWord();
    drawCanvas();
    drawLine();
}