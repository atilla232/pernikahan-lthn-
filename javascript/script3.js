const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcons = document.querySelector(".audio-icon-wrapper i");
const song = document.querySelector("#song");

let isPlaying = false;
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  localStorage.setItem("opened", "true");
  playAudio();
  isPlaying = true;
}

function playAudio() {
  song.volume = 0.2;
  audioIconWrapper.style.display = "flex";
  song.play();
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcons.classList.remove("bi-disc");
    audioIcons.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcons.classList.add("bi-disc");
    audioIcons.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};

// disableScroll();

if (!localStorage.getItem("opened")) {
  disableScroll();
}

window.onload = function () {
  if (localStorage.getItem("opened")) {
    audioIconWrapper.style.display = "flex";
    song.pause();
    song.volume = 0.2;
  }
};
