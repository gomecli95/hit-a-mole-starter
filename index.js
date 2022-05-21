const holes  = document.getElementsByClassName("hole");
const gameZone = document.getElementById("hit-a-mole");
let score = 0;

gameZone.addEventListener("click", (clickEvent) => {
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
    holes[randomHoleIndex].classList.toggle("mole");
    if (clickEvent.target.matches(".mole")) {
        score++;  
    } 
    document.getElementById("score").innerHTML = score;
});