const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector('audio');

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

// select our play button
const playButton = document.querySelector('button');

const gainNode = audioContext.createGain();
track.connect(gainNode).connect(audioContext.destination);

playButton.addEventListener('click', function() {

  console.log("Playing!")
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }

}, false);

audioElement.addEventListener('ended', () => {
  playButton.dataset.playing = 'false';
}, false);

const volumeControl = document.querySelector('#volume');

volumeControl.addEventListener('input', function() {
    gainNode.gain.value = this.value;
}, false);