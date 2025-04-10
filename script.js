let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let homePoints = 0;
let guestPoints = 0;

function incHomeOne() {
    homePoints += 1;
    scoreHome.textContent = homePoints; 
}

function incHomeTwo() {
    homePoints += 2;
    scoreHome.textContent = homePoints;
}

function incHomeThree() {
    homePoints += 3;
    scoreHome.textContent = homePoints;
}

function incGuestOne() {
    guestPoints += 1;
    scoreGuest.textContent = guestPoints; 
}

function incGuestTwo() {
    guestPoints += 2;
    scoreGuest.textContent = guestPoints;
}

function incGuestThree() {
    guestPoints += 3;
    scoreGuest.textContent = guestPoints;
}

function newGame() {
    homePoints = 0;
    guestPoints = 0;
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
}
