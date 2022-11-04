function drawCanvas(){
    board.lineWidth = 8;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#F3F5F6";
    board.strokeStyle = "#8A3871";

    board.fillRect(0,0,1200,860);
    board.beginPath();
    board.moveTo(500, 500);
    board.lineTo(900,500);
    board.stroke();
    board.closePath();
}

function drawLetterLine(){
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#F3F5F6";
    board.strokeStyle = "#8A3871";

    let wide = 600/secretWord.length;
    for (let i = 0; i < secretWord.length; i++){
        board.moveTo(450 + (wide*i), 640)
        board.lineTo(550 + (wide*i), 640)
    }
    board.stroke();
    board.closePath();
}
// intento de avanzar solo
/*
function replaceLetter(){
    for (let i = 0; i < secretWord.length; i++){
        board.replaceAt(i*2, keyPressed);
    }
}*/

// 2 livecoding
function escribirLetraCorrecta(index){
    board.font = 'bold 52px Inter';
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#8A3871";
    
    let wide = 600/secretWord.length;
    board.fillText(secretWord[index],505+(wide*index), 620)
    board.stroke()
}

function escribirLetraIncorrecta(letter, errorsLeft){
    board.font = 'bold 40px Inter';
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#8A3871";
    board.fillText(letter, 535+(40*(10-errorsLeft)), 710, 40)
}


// function dibujarHorca () {
//     board.lineWidth = 8;
//     board.lineCap = "round";
//     board.lineJoin = "round";
//     board.fillStyle = "#F3F5F6";
//     board.strokeStyle = "#8A3871";

//     board.fillRect(0,0,1200,860);
//     board.beginPath();
//     board.moveTo(700, 500);
//     board.lineTo(1200,500);
//     board.stroke();
//     board.closePath();
// }