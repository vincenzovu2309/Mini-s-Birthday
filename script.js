function showLetter(){
    document.getElementById("letter")
    .classList.remove("hidden");
}

function blowCandles(){

    document.getElementById("candles")
    .innerHTML = "💨 💨 💨";

    document.getElementById("birthdayMessage")
    .classList.remove("hidden");

    alert("Happy Birthday Miniluu ❤️");
}
