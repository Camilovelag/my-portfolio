const hamburgerOpen = document.querySelector('.hamburger-btn');

hamburgerOpen.addEventListener('click', () => {
  const div = document.querySelector('#links-container');
  div.classList.toggle('active-menu');

  const div2 = document.querySelector('#hamburger-btn');
  div2.classList.toggle('switch-btn');

  const div3 = document.querySelector('#header-logo');
  div3.classList.toggle('active-logo');
});

const menuRecentWorks = document.querySelector('.link-1');

menuRecentWorks.addEventListener('click', () => {
  const div4 = document.querySelector('#links-container');
  div4.classList.remove('active-menu');

  const div5 = document.querySelector('#hamburger-btn');
  div5.classList.remove('switch-btn');

  const div6 = document.querySelector('#header-logo');
  div6.classList.remove('active-logo');
});

const menuAboutMe = document.querySelector('.link-2');

menuAboutMe.addEventListener('click', () => {
  const div4 = document.querySelector('#links-container');
  div4.classList.remove('active-menu');

  const div5 = document.querySelector('#hamburger-btn');
  div5.classList.remove('switch-btn');

  const div6 = document.querySelector('#header-logo');
  div6.classList.remove('active-logo');
});

const menuContactUs = document.querySelector('.link-3');

menuContactUs.addEventListener('click', () => {
  const div4 = document.querySelector('#links-container');
  div4.classList.remove('active-menu');

  const div5 = document.querySelector('#hamburger-btn');
  div5.classList.remove('switch-btn');

  const div6 = document.querySelector('#header-logo');
  div6.classList.remove('active-logo');
});


/* Open popup window section */

let proj1 = ['Multi Post Stories',
            './images/popup-img.png',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
            '#',
            '#'];

const openPopupWindow = document.querySelector('.project-1');

openPopupWindow.addEventListener('click', () => {
  const div7 = document.querySelector('#popup');
  div7.classList.toggle('show-popup');
  document.getElementById('popup-title').innerHTML = proj1[0];
  document.getElementById('popup-img').src = proj1[1];
  document.getElementById('popup-description').innerHTML = proj1[2];
  document.getElementById("see-live > a").href = proj1[3];
  document.getElementById("see-source > a").href = proj1[4];

});

// Close popup
const closePopupWindow = document.querySelector('.popup-btn');

closePopupWindow.addEventListener('click', () => {
  const div8 = document.querySelector('#popup');
  div8.classList.toggle('show-popup');
});

//Validation form--------------------------------------------------------------------------------------------

const form = document.getElementById('form');
const email = document.getElementById("email");
const errorMessage = document.getElementById('error-msg');

form.addEventListener("submit", (e) => {
  let emailValue = email.value;
  let upperCase = emailValue.replace(/[^A-Z]/g, '');
  if (upperCase.length > 0) {
      e.preventDefault();
      errorMessage.innerText = 'Please type your email in lowercase';
 }
});

// form rearrange ----------------------
let windowWidth = window.innerWidth;
if (windowWidth > 768){
  document.getElementById("full_name").disabled = true;
} else {
  document.getElementById("full_name").disabled = false;
}
