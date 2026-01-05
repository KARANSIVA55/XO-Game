console.log("XO-game-loaded");

const boxes = document.getElementsByClassName("boxdisplay");
const playerXscore = document.getElementById("p1pointsdisplay");
const playerOscore = document.getElementById("p2pointsdisplay");
const gamecountdisplay = document.getElementById("gamecount");

let currplayer = 1;
let gamecount = 0;
let p1points = 0;
let p2points = 0;

let totalmoves = 9;


const winpattern = [[1,2,3], [4,5,6], [7,8,9],
                    [1,4,7], [2,5,8], [3,6,9],
                    [1,5,9], [3,5,7]]

for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click", function(){
        if(this.textContent === "-"){
            if(currplayer === 1){
                this.textContent = "X";
                currplayer = 0;
                console.log(currplayer +" - "+"clicked on box no :"+i);
                totalmoves -= 1;
                console.log("total moves :" + totalmoves);
                checkwin();
            }
            else if(currplayer === 0){
                this.textContent = "O";
                currplayer = 1;
                console.log(currplayer +" - "+"clicked on box no :"+i);
                totalmoves -= 1;
                console.log("total moves :" + totalmoves);
                checkwin();
            }
        }
    })
}

function checkwin(){

    if(totalmoves<1){
        gamecount ++;
        gamecountdisplay.textContent = ("Game-"+gamecount);

        console.log("Game-Draw");

        for(i=0;i<boxes.length;i++){
            boxes[i].textContent = "-";
        }
        console.log("Total-Moves-Reset");
        totalmoves = 9;
    }

    for(i=0;i<winpattern.length;i++){

        const a = winpattern[i][0];
        const b = winpattern[i][1];
        const c = winpattern[i][2];

        const bx1 = boxes[a - 1].textContent;
        const bx2 = boxes[b - 1].textContent;
        const bx3 = boxes[c - 1].textContent;

        if( bx1!=="-" && bx1 === bx2 && bx2 === bx3 ){
            console.log("winner is " + bx1);
            gamecount += 1;
            gamecountdisplay.textContent = ("Game-"+gamecount);
            if(bx1 === "X"){
                p1points += 1;
                totalmoves = 9;
                playerXscore.textContent = ("Points : " + p1points);
            }
            else if(bx1 === "O"){
                p2points += 1;
                totalmoves = 9;
                playerOscore.textContent = ("Points : "+ p2points);
            }
            for(i=0;i<boxes.length;i++){
                boxes[i].textContent = "-";
            }
        }
        }
    }
