const playerEl = document.querySelector('.player');
const video = playerEl.querySelector(".player__video");
console.log(video)
const player = playerEl.querySelector(".player__video");
const playerControls = playerEl.querySelector(".player__controls");
const playButton = playerControls.querySelector('.player__button');
const backwardButton = playerControls.querySelector("button[data-skip='-10']");
const fowardButton = playerControls.querySelector("button[data-skip='25']");
const volumeInpute = playerControls.querySelector("input[name='volume']");
const playbackRateInput = playerControls.querySelector("input[name='playbackRate']");

// function handleProgress() {
//     const percent = (player.currentTime / player.duration) * 100;
//     progress.style.flexBasis = `${percent}%`;
//   }


// function windBackward() {
//     if(player.currentTime <= 10) {
//         resetVideo();
//     } else{
//         player.currentTime -= 10;
//     }
// }
// function windFoward() {
//     if(player.currentTime >= player.duration - 25) {
//         resetVideo();
//     } else {
//         player.currentTime += 25;
//     }
// }

// playButton.addEventListener("click", handlePlayButton, false);
// playVideo();
// player.volume = 0;
// backwardButton.addEventListener("click", windBackward);
// fowardButton.addEventListener("click", windFoward);
// volumeInpute.addEventListener("input", handleInput);
// playbackRateInput.addEventListener("input", handleInput);
// // window.addEventListener("keydown", handleKeyboard);
// player.addEventListener("timeupdate", handleProgress)

// // async function handleKeyboard(e) {
// //     if(e.key === " ") {
        
// //     }

// //     if(e.key === " " || playButton.classList.contains("playing")) {
// //         playButton.classList.remove("playing");
// //         await player.pause();
// //     }
// //     console.log(!playButton.classList.contains("playing"));
// //     if(e.key === " " || !playButton.classList.contains("playing")) {
// //         playButton.classList.add("playing");
// //         await player.play();
// //     }
// //     // if(e.key === " " ||  playButton.classList.contains("playing")) {

// //     // }
// // }
// // function calcualteProgress() {
// //     const percentage

// // }
// async function playVideo() {
//     playButton.classList.add('playing');
//     await player.play();

// }
// async function resetVideo() {
//     await player.pause();
//     player.currentTime = 0;
//     player.play();
// }

// function handlePlayButton() {
//     if(player.paused) {
//         playVideo();


//     } else {
//         player.pause();
//         playButton.classList.remove("playing");
//     }
// }

// function handleInput(e) {
//     const {name, value} = e.currentTarget;
//     console.log(name, value);
//     if(name === "volume") { 
//         player.volume = value;
//     } else {
//         player.playbackRate = value;
//     }
// }
