//set up js for score storage and retrieval
var scoresEl = document.querySelector(".scores")
var storage = JSON.parse(localStorage.getItem("score")) || []
console.log(storage);
for (var i = 0; i < storage.length; i++) {
    var score = document.createElement("p")
    score.innerText = storage[i].initials + " " + storage[i].time
    scoresEl.appendChild(score)
    console.log("hello there")
}