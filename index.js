let homeScore = document.getElementById("home-score")
//console.log(homeScore)
let scoreHome = 0

function add1_home(){
    scoreHome += 1
    console.log(scoreHome)
    homeScore.innerText = scoreHome
}
function add2_home(){
    scoreHome += 2
    console.log(scoreHome)
    homeScore.innerText = scoreHome
}
function add3_home(){
    scoreHome += 3
    console.log(scoreHome)
    homeScore.innerText = scoreHome
}

let guestScore = document.getElementById("guest-score")
//console.log(guestScore)
let scoreGuest = 0

function add1_guest(){
    scoreGuest +=1
    console.log(scoreGuest)
    guestScore.innerText = scoreGuest
}
function add2_guest(){
    scoreGuest +=2
    console.log(scoreGuest)
    guestScore.innerText = scoreGuest
}
function add3_guest(){
    scoreGuest +=3
    console.log(scoreGuest)
    guestScore.innerText = scoreGuest
}

function resetScore(){
    scoreGuest = 0;
    scoreHome = 0;
    guestScore.innerText = scoreGuest;
    homeScore.innerText = scoreHome;
}