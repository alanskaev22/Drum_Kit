let audio;


let numOfButtons = document.getElementsByTagName("button").length;

for (let i = 0; i < numOfButtons; i++) {

    let currentDrum = document.querySelectorAll(".drum")[i];
    currentDrum.addEventListener("click",
        function () {
            const key = this.innerHTML;
            playSound(key);
            btnAnimation(key);
        })
}

addEventListener("keypress", function (event) {
    playSound(event.key);
    btnAnimation(event.key);

})

// Functions
function playSound(key) {
    switch (key) {
        case "w": {
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        }
        case "a": {
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        }
        case "s": {
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        }
        case "d": {
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        }
        case "j": {
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        }
        case "k": {
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        }
        case "l": {
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        }
        default: {
            console.log("Key is not defined");
        }
    }
}

function btnAnimation(key) {
    const activeBtn = document.querySelector("."+key);
    activeBtn.classList.add("pressed");
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100);
}