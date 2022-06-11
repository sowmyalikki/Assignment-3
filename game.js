//Assignment (Mathematical Shapes)

// // a- Diagonal of a square
// function Diagonal function(l, w){
  //  return (math.sqrt((l*2) + (w*2)))
// }
//console.log(diagnolfun(9, 9))
//Area of Triangle
//Area of Triangle (a, b, c){
    // let sides = (a + b + c)/2;
    //return (math.sqrt(sides*((sides-a)*(sides-b)* (sides - c))))
//}
//Main Assignment
function computerPlay (){
    let randomnumber = Math.ceil(Math.random() * 3)
    switch (randomnumber) {
        case 1:
            return("rock");
        case 2:
            return ("paper");
        case 3:
            return ("scissor");
            }
}

let result = "";

function playround (playerselection, computerselection){
    playerselection = playersection.tolowercase();
    if (playersection ==computerselection){
        result = "it is a draw";
        } else if (playerselection == "paper" && computerselection =="rock" , playerselection =="scissor"&& computerselection=="paper" , playersection =="rock" && computerselection =="paper")
        result = "you won";
} else {
    result = "you loose";   
}
return ( yourselection: $ {playerselection}, computerselection: ${computerselection}, result: function game (){
    let userscore = 0;
    let computerscore = 0;
    let draw = 0;
    for ( let r=0; r<5; r++) {
        let count = r +1;
        let computerselection = computerPlay ()
        let playerselection = prompt ( "what is your selection:")

playround (playerselection, computerselection)
if ( result == "you win"){
    userscore += 1;
    console.log(
        `${playround(playerselection, computerselection)},\nyour score: $ {user score}, \ncomputerscore: ${computerscore,\ndraw: $ {draw}, \nround: ${count}}
    );
} else if (result == "you loose"){
    computerscore += 1;
    console.log(
        `${playround(playerselection, computerselection)},\nyour score: $ {user score}, \ncomputerscore: ${computerscore,\ndraw: $ {draw}, \nround: ${count}}
    );
} else {
    draw += 1;
    userscore += 1;
    console.log (
        `${playround(playerselection, computerselection)},\nyour score: $ {user score}, \ncomputerscore: ${computerscore,\ndraw: $ {draw}, \nround: ${count}}
    );
}
}
}}