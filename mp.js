const audioPlayer = document.getElementById("audio-player");
const howler = new Howler();

howler.fetch({
  url: "audio-file.m4a",
  responseType: "arraybuffer",
}).then((response) => {
  audioPlayer.src = URL.createObjectURL(new Blob([response]));
}).catch((error) => {
  console.error(error);
});
