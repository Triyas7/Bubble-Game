var timer = 60;
var score = 0;
var hint = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getHint() {
    hint = Math.floor(Math.random() * 4);
    document.querySelector("#hitcount").textContent = hint;
}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#panelbuttom").innerHTML = clutter
}

function runTimer() {
    var stoptime = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerfn").textContent = timer;
        }
        else {
            clearInterval(stoptime);
            document.querySelector("#panelbuttom").innerHTML = "GameOver!"
        }
    }, 1000);
}


document.querySelector("#panelbuttom").addEventListener("click",function (dats){
    var clicking = Number(dats.target.textContent);
    if (hint === clicking){
        makeBubble();
        getHint();
        increaseScore();
    }
});

getHint();
runTimer();
makeBubble();