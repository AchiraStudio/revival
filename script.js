const h1Element = document.querySelector('#wide-screen #home .img1 .text h1');
const h1About = document.querySelector('#wide-screen #about h1');
const h1Shop = document.querySelector('#wide-screen #shop .h1');

let colors = [
    '#FF69B4', '#FFC107', '#FFD700', '#FFFF00', '#33CC33',
    '#00FFFF', '#66CCCC', '#FF99CC', '#FFA07A', '#FFC0CB',
    '#ADD8E6', '#7FFD00', '#FF69B4', '#FFA500', '#FFFF99',
    '#CCFF00', '#33FF00', '#00FF00', '#66FF00', '#CCFFFF',
    '#99FF99', '#66CCCC', '#33CCCC', '#0099FF', '#0066FF',
    '#0033FF'
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(() => {
    let randomColor = getRandomColor();
    h1Element.style.color = randomColor;
    h1About.style.color = randomColor;
    h1Shop.style.color = randomColor;
}, 2000); // change color every 2 seconds


function ticketWeb() {
  window.location.href = "https://recisrevival.my.id/";
}

function signUp() {
  window.location.href = "extra/registration.html";
}

function webTeam() {
  window.location.href = "extra/unavailable.html";
}

function playMinecraft() {
  window.location.href = "assets/minecraft/EaglercraftX_1.8_u31_Offline_Signed.html";
}

const info = document.querySelector('#info');
const window1 = document.querySelector('#one');
const window2 = document.querySelector('#two');
const window3 = document.querySelector('#three');
const window4 = document.querySelector('#four');

function hideInfo() {
  info.style.display = 'none';
  window1.style.display = 'none';
  window2.style.display = 'none';
  window3.style.display = 'none';
  window4.style.display = 'none';
}

function showWindow1() {
  hideInfo();
  info.style.display = 'flex';
  window1.style.display = 'flex';
}

function showWindow2() {
  hideInfo();
  info.style.display = 'flex';
  window2.style.display = 'flex';
}

function showWindow3() {
  hideInfo();
  info.style.display = 'flex';
  window3.style.display = 'flex';
}

function showWindow4() {
  hideInfo();
  info.style.display = 'flex';
  window4.style.display = 'flex';
}