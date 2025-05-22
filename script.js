const audio = document.getElementById('background-audio');

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
});