const audio = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');
const progressBar = document.getElementById('progress');
const currentTimeSpan = document.getElementById('current-time');
const durationSpan = document.getElementById('duration');

playPauseButton.addEventListener('click', togglePlayPause);
volumeControl.addEventListener('input', setVolume);
progressBar.addEventListener('input', setProgress);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('loadedmetadata', setDuration);

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '일시정지';
    } else {
        audio.pause();
        playPauseButton.textContent = '재생';
    }
}

function setVolume() {
    audio.volume = volumeControl.value;
}

function setProgress() {
    const time = (progressBar.value / 100) * audio.duration;
    audio.currentTime = time;
}

function updateProgress() {
    if (!isNaN(audio.duration)) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
        currentTimeSpan.textContent = formatTime(audio.currentTime);
    }
}

function setDuration() {
    durationSpan.textContent = formatTime(audio.duration);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}