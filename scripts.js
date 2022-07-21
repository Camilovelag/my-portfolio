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


// Open popup window section 

const proj1 = {title: 'Multi Post Stories',
              img: './images/popup-img.png',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
              seeLive: '#',
              seeSource: '#'};

const openPopupWindow = document.querySelector('.project-1');

openPopupWindow.addEventListener('click', () => {
  const div7 = document.querySelector('#popup');
  div7.classList.toggle('show-popup');
  document.getElementById('popup-title').innerHTML = proj1.title;
  document.getElementById('popup-img').src = proj1.img;
  document.getElementById('popup-description').innerHTML = proj1.description;
  document.getElementById("see-live > a").href = proj1.seeLive;
  document.getElementById("see-source > a").href = proj1.seeSource;

});

// Close popup
const closePopupWindow = document.querySelector('.popup-btn');

closePopupWindow.addEventListener('click', () => {
  const div8 = document.querySelector('#popup');
  div8.classList.toggle('show-popup');
});