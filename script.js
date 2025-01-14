// Game Over Condition  for snake game
// 1. Snake hits the wall
// 2. Snake hits itself




//start
function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
    return false;
}

if(isCollide(snakeArr)) {
    gameOverSound.play();
    musicSound.pause();
    inputDir = {x: 0, y: 0}; 
    alert("Game Over. Press any key to play again!");
    snakeArr = [{x: 13, y: 15}];
    musicSound.play();
    score = 0; 
}
