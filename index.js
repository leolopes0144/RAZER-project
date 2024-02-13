document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('audioPlayer');
    var playPauseButton = document.getElementById('playPauseButton');

    playPauseButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = '&#10074;&#10074;'; /* Altera para ícone de pausa */
        } else {
            audio.pause();
            playPauseButton.innerHTML = '&#9654;'; /* Altera para ícone de play */
        }
    });
});

