const botao = document.getElementById("botaoAudio")
const audio = document.getElementById("audio")
let icone = document.getElementById("iconMute")

const somTextoDra = new Audio("src/music/falaDra.mp3");
const somTextoPlut = new Audio("src/music/falaPlut.mp3");

const audioContext = new AudioContext();

const ganhoMusica = audioContext.createGain();
const ganhoDra = audioContext.createGain();
const ganhoPlut = audioContext.createGain();

const fonteMusica = audioContext.createMediaElementSource(audio);
const fonteDra = audioContext.createMediaElementSource(somTextoDra);
const fontePlut = audioContext.createMediaElementSource(somTextoPlut);

fonteMusica.connect(ganhoMusica);
ganhoMusica.connect(audioContext.destination);

fonteDra.connect(ganhoDra);
ganhoDra.connect(audioContext.destination);

fontePlut.connect(ganhoPlut);
ganhoPlut.connect(audioContext.destination);

ganhoMusica.gain.value = 0.3;
ganhoDra.gain.value = 0.4;
ganhoPlut.gain.value = 0.06;

botao.addEventListener("click", function () {
     if (audio.paused) {
    audio.play();
    icone.src = "./src/img/opcoes audio/Audio3.png";
  } else {
    audio.pause();
    icone.src = "./src/img/opcoes audio/AudioMute3.png";
  }
});

