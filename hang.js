// selectores
let words = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let board = document.getElementById("hang").getContext("2d"); // canvas en html
let secretWord = "";
let letters = [];
let errors = 8;


// Palabra Secreta
function chooseSecretWord(){
    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    console.log(secretWord);
}

// 2 livecoding
function comprovarLetra(key){
    let state = false;
    if(key >= 65 && letters.indexOf(key) || key <= 90 && letters.indexOf(key)){
        letters.push(key);
        console.log(key);
        return state
    }else{
        state = true
        console.log(key);
        return state
    }
}

function anadirLetraIncorrecta(){
    errors -= 1;
    console.log(errors);
}

// iniciar juego
function startGame(){
    document.getElementById("startGame").style.display = "none";
    document.getElementById("addNewWord").style.display = "none";

    chooseSecretWord();
    drawCanvas();
    drawLetterLine();

    document.onkeydown = (e) => {
        let letter = e.key.toUpperCase();
        
        if(comprovarLetra(letter) && secretWord.includes(letter)){
            for(let i =0; i < secretWord.length; i++){
                if(secretWord[i] === letter){
                    escribirLetraCorrecta(i);
                }
            }
        }else{
            anadirLetraIncorrecta(letter);
            escribirLetraIncorrecta(letter, errors);
        }
    }
}

// intento de avanzar solo
/*
function detectKey (event){
    let keypressed = event.key;
    console.log(keypressed);
    replaceLetter();
}*/



