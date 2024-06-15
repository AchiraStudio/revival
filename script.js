const h1Element = document.querySelector('#wide-screen #home .img1 .text h1');

let colors = [
    '#FF69B4', // Hot Pink
    '#FFC107', // Amber
    '#FFD700', // Gold
    '#FFFF00', // Yellow
    '#33CC33', // Lime
    '#00FFFF', // Cyan
    '#66CCCC', // Bright Teal
    '#FF99CC', // Pastel Pink
    '#FFA07A', // Light Coral
    '#FFC0CB', // Pastel Pink
    '#ADD8E6', // Light Blue
    '#7FFD00', // Chartreuse
    '#FF69B4', // Hot Pink
    '#FFA500', // Coral
    '#FFFF99', // Yellow Green
    '#CCFF00', // Bright Yellow
    '#33FF00', // Lime Green
    '#00FF00', // Green
    '#66FF00', // Bright Chartreuse
    '#CCFFFF', // Pale Turquoise
    '#99FF99', // Mint Green
    '#66CCCC', // Bright Teal
    '#33CCCC', // Teal
    '#0099FF', // Sky Blue
    '#0066FF', // Royal Blue
    '#0033FF', // Navy Blue
  ];
let colorIndex = 0;

setInterval(() => {
  h1Element.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // loop through the colors array
}, 2000); // change color every 2 seconds

document.addEventListener('scroll', () => {
  const nav = document.querySelector('#wide-screen .header');
  const screenHeight = screen.height;
  let scrollThreshold = 0;

  if (screenHeight === 1080) {
    scrollThreshold = 866;
  } else {
    scrollThreshold = 599;
  }
  console.log(screenHeight);
  console.log(window.scrollY);
  if (window.scrollY > scrollThreshold) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

function redirectOnClick() {
  window.location.href = "buy-ticket.html";
}

function playMinecraft() {
  window.location.href = "assets/minecraft/EaglercraftX_1.8_u31_Offline_Signed.html";
}

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    window.location.href = "buy-ticket.html";
  });
});

function changeText(element) {
  element.innerText = "The Adventure Begins";
}

function changeTextBack(element) {
  element.innerText = "A Great Journey Awaits"
}

// Get the audio element
const audio = new Audio('assets/song-bg.mp3');

// Get the play and pause buttons
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

// Get the time slider
const timeSlider = document.getElementById('time-slider');

// Get the current time span
const currentTimeSpan = document.getElementById('current-time');

// Set the audio controls to be hidden initially
const audioControls = document.querySelector('.audio-controls');
audioControls.style.display = 'none';

// Show the audio controls after 10 seconds
setTimeout(() => {
  audioControls.style.display = 'block';
}, 10000);

// Play the audio 9 seconds after the page is loaded
setTimeout(() => {
  audio.play();
}, 9000);

// Add event listeners to the play and pause buttons
playButton.addEventListener('click', () => {
  audio.play();
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
});

pauseButton.addEventListener('click', () => {
  audio.pause();
  playButton.style.display = 'block';
  pauseButton.style.display = 'none';
});

// Update the time slider and current time span
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  currentTimeSpan.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  timeSlider.value = currentTime;
});

// Update the audio time when the time slider is changed
timeSlider.addEventListener('input', () => {
  audio.currentTime = timeSlider.value;
});

// Set the time slider max value to 11 minutes 33 seconds
timeSlider.max = 693;