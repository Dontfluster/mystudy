const media = document.querySelector("audio"); // 또는 "video"
const playPauseButton = document.getElementById("play-pause-button");
const volumeControl = document.getElementById("volume-control");
const progressBar = document.getElementById("progress-bar");

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        media.pause();
        playPauseButton.textContent = "Play";
    } else {
        media.play();
        playPauseButton.textContent = "Pause";
    }
    isPlaying = !isPlaying;
});

volumeControl.addEventListener("input", () => {
    media.volume = volumeControl.value;
});

media.addEventListener("timeupdate", () => {
    const currentTime = media.currentTime;
    const duration = media.duration;
    progressBar.value = (currentTime / duration) * 100;
});