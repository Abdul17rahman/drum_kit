//Select all the button with drum class from the html page
let buttons = document.querySelectorAll(".drum");

//Check which button has been clicked
for (let i = 0; i < buttons.length; i++) {
  //Add an event listener to the clicked button
  buttons[i].addEventListener("click", function () {
    let clickedBtn = buttons[i].innerHTML;
    //Play the corresponding sound
    playSound(clickedBtn);
    //Add the click animation
    addAnime(buttons[i]);
  });
}

//Detect the keyboard keypress and play the sound.
document.addEventListener("keydown", (e) => {
  playSound(e.key);
  addAnime(e.key);
});

const addAnime = (el) => {
  try {
    let clicked = document.querySelector("." + el);
    clicked.classList.add("pressed");

    setTimeout(() => {
      clicked.classList.remove("pressed");
    }, 100);
  } catch (error) {}
};

const playSound = (character) => {
  switch (character) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      break;
  }
};
