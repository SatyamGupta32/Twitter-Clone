const searchInput = document.getElementById("search-input");
const exploreIcon = document.getElementById("explore-icon");
const foryouContainer = document.querySelector(".foryouContainer");
const followingContainer = document.querySelector(".followingContainer");
const For = document.querySelector(".for");
const Following  = document.querySelector(".follow");
const ForYouContent = document.querySelector(".ForYouContent");
const FollowingContent = document.querySelector(".FollowingContent");
const hamburger = document.querySelector(".hamburger");
const first = document.querySelector(".first");
const crossContainer = document.querySelector(".crossContainer");


hamburger.addEventListener("click", ()=> {
  first.style.width = "60%";
});

crossContainer.addEventListener("click", ()=> {
  first.style.width = "0%";
});

foryouContainer.addEventListener("click",() => {
  ForYouContent.style.display = "block";
  FollowingContent.style.display = "none";
  For.style.borderBottom = "3px solid rgb(52, 150, 230)";
  Following.style.borderBottom = "3px solid transparent";
  For.style.color = "#ffffff";
  For.style.fontWeight = "700";
  Following.style.color = "#71767B";
  Following.style.fontWeight = "500";
});
followingContainer.addEventListener("click",() => {
  ForYouContent.style.display = "none";
  FollowingContent.style.display = "block";
  For.style.borderBottom = "3px solid transparent";
  Following.style.borderBottom = "3px solid rgb(52, 150, 230)";
  Following.style.color = "#ffffff";
  Following.style.fontWeight = "700";
  For.style.color = "#71767B";
  For.style.fontWeight = "500";
});

searchInput.addEventListener("focus", () => {
  exploreIcon.style.filter =
    "invert(33%) sepia(96%) saturate(1571%) hue-rotate(172deg) brightness(98%) contrast(101%)";
});

searchInput.addEventListener("blur", () => {
  exploreIcon.style.filter =
    "invert(55%) sepia(0%) saturate(2500%) hue-rotate(172deg) brightness(98%) contrast(101%)";
});


document.querySelectorAll(".tweetContainer").forEach((tweetContainer) => {
  tweetContainer.addEventListener("click", () => {
    const replyContainer = tweetContainer.querySelector(".replyContainer");
    const postbtn = tweetContainer.querySelector(".postbtn-2");
    replyContainer.style.display = "flex";
    postbtn.style.cursor = "pointer";
    postbtn.style.backgroundColor = "#1A8CD8";
  });
});

document.querySelectorAll(".tweettext").forEach((textarea) => {
  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
});

// Function to generate and display a random number
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 300) + 1; // Generates a random number between 1 and 300
  const show = document.querySelector(".show");
  show.innerText = `Show ${randomNumber} posts`;
}
// Call the function when the page loads
window.onload = generateRandomNumber;

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".customVideo");

  videos.forEach((video) => {
    const playPauseBtn = video.parentElement.querySelector(".playPauseBtn");
    const muteBtn = video.parentElement.querySelector(".muteBtn");
    const fullscreenBtn = video.parentElement.querySelector(".fullscreenBtn");
    const seekBar = video.parentElement.querySelector(".seekBar");
    const volumeBar = video.parentElement.querySelector(".volumeBar");

    // Play/Pause functionality
    playPauseBtn.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = `<img src="assets/pause.svg" alt="">`;
      } else {
        video.pause();
        playPauseBtn.innerHTML = `<img src="assets/play.svg" alt="">`;
      }
    });

    // Mute/Unmute functionality
    muteBtn.addEventListener("click", function () {
      video.muted = !video.muted;
      muteBtn.innerHTML = video.muted
        ? `<img src="assets/mute.svg" alt="">`
        : `<img src="assets/volume.svg" alt="">`;
    });

    // Fullscreen functionality
    fullscreenBtn.addEventListener("click", function () {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    });

    seekBar.value = 0;
    volumeBar.value = video.volume;

    // Seekbar functionality
    video.addEventListener("timeupdate", function () {
      const value = (100 / video.duration) * video.currentTime;
      seekBar.value = value;
    });

    seekBar.addEventListener("input", function () {
      const time = video.duration * (seekBar.value / 100);
      video.currentTime = time;
    });

    // Volume control functionality
    volumeBar.addEventListener("input", function () {
      video.volume = volumeBar.value;
    });
  });
});
