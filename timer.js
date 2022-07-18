const startingMinutes = 0.25;
let time = startingMinutes * 60;


const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    let seconds = time % 60;

    countdownEl.innerHTML = `${seconds}`;

    if(seconds <= 0){
        let seconds = 15;

        window.location.replace("./index.html")
    }

    


    time--;
}
