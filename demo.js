var guess = document.getElementById("guessno");
var result = document.getElementById("result");
var score = document.getElementById("score");
var rannum = Math.floor(Math.random() * 10)+1 ;
var sc = 10;
console.log(rannum);
function check() {
    
    var input = guess.value;
    if (input == rannum) {
        result.textContent = "Right Number";
        setTimeout(function() {
            alert("You Won.....");
        }, 1000); 
    } 
    else if(sc == 0){
        alert("You loss the game...")

    }
    else if(input == rannum+1 || input == rannum-1){
        result.textContent="You're very close! Try again";
    }
    else {
        sc = sc-1;
        score.textContent= "Score: "+sc; 
        result.textContent = "Wrong Number";

    }
}
