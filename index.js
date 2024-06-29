let homeScore = document.getElementById("homeScore")
let homePoint = 0;
function homeScoreSystem(num) {
    homePoint +=num
    homeScore.innerHTML = homePoint;
};

 let guestScore = document.getElementById("guestScore")
let guestPoint = 0;
function guestScoreSystem(num) {
    guestPoint +=num
    guestScore.innerHTML = guestPoint;
};
function resetScore() {
    homeScore.innerHTML = 0;
    guestScore.innerHTML = 0;
}