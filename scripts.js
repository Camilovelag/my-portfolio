// ----------- TOGGLE MENU -----------

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

// ---------------------------- WORK CARDS INFO ----------------------------------

const arr1 = [
  {
    id: 0,
    popuptitle: 'Doctor Reservations Back-end',
    popupdescription: 'Concise and well-documented API to manage doctors, logins, and reservations.',
    popuptec: ['Ruby on Rails', 'PostgreSQL', 'Swagger'],
    popupimg: './images/thumbnails/thumbnail-doctors-backend.jpg',
    btnlive: 'https://doctors-reservations-rily.onrender.com/api-docs/index.html',
    btnsource: 'https://github.com/Camilovelag/Doctors-Reservations-Backend',
  },
  {
    id: 1,
    popuptitle: 'My Awesome Budget App',
    popupdescription: 'A simple and handsome app to manage your budget with attractive UI and intuitive UX.',
    popuptec: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
    popupimg: './images/thumbnails/thumbnail-awesome-budget.jpg',
    btnlive: 'https://my-awesome-budget-app.onrender.com/',
    btnsource: 'https://github.com/Camilovelag/my-awesome-budget-app',
  },
  {
    id: 2,
    popuptitle: 'Awesome Recipes',
    popupdescription: 'This is a simple recipe app that allows you to search for a delightful recipe by name, and choose one based on its popularity and ratings.',
    popuptec: ['React', 'Redux', 'Bootstrap'],
    popupimg: './images/thumbnails/thumbnail-awesome_recipes.jpg',
    btnlive: 'https://camilovelag-awesome-recipes.netlify.app',
    btnsource: 'https://github.com/Camilovelag/awesome-recipes',
  },
];

document.getElementById('card-works-container').innerHTML = arr1.map((items) => `<div class="card-works" style="background-image: url('${items.popupimg}');">  
              <h2 class="card-works-title" id="card-works-title">${items.popuptitle}</h2>
              <p class="card-works-description" id="card-works-description">${items.popupdescription}</p>
              <ul class="card-works-tech">
                <li class="card-works-tech-items">${items.popuptec[0]}</li>
                <li class="card-works-tech-items">${items.popuptec[1]}</li>
                <li class="card-works-tech-items">${items.popuptec[2]}</li>
              </ul>
                <a href="#popup" class="card-works-button project-2" id="project-${items.id}">See Project</a>
            </div>`).join('');

// ---------------------------- OPEN POPUP WINDOW SECTION ----------------------------------

const proj1 = {
  popuptitle: 'Doctor Reservations Front-end',
  popupdescription: 'Responsive and intuitive front-end app to manage doctors, logins, and reservations, which uses an API to manipulate and preserve data.',
  popuptec: ['React', 'Redux', 'Tailwind'],
  popupimg: './images/thumbnails/thumbnail-doctors-frontend.jpg',
  btnlive: 'https://doctors-reservations.netlify.app/',
  btnsource: 'https://github.com/Camilovelag/doctors-reservations-frontend',
  btnName: 'btn4',
  btnimg1: './pictures/TimeAndIcons/github.png',
  btnimg2: './pictures/TimeAndIcons/github.png',
};

const btn4 = document.querySelector('#project-4');
const popupOpen = document.querySelector('.popup');
const { 0: tech0a, 1: tech0b, 2: tech0c } = proj1.popuptec;

btn4.addEventListener('click', () => {
  popupOpen.classList.toggle('show-popup');
  document.getElementById('popup-title').innerHTML = proj1.popuptitle;
  document.getElementById('popup-techList1').innerHTML = tech0a;
  document.getElementById('popup-techList2').innerHTML = tech0b;
  document.getElementById('popup-techList3').innerHTML = tech0c;
  document.getElementById('popup-img').src = proj1.popupimg;
  document.getElementById('popup-description').innerHTML = proj1.popupdescription;
  document.getElementById('popup-live').href = proj1.btnlive;
  document.getElementById('popup-source').href = proj1.btnsource;
});

const btn0 = document.querySelector('#project-0');
const { 0: tech1a, 1: tech1b, 2: tech1c } = arr1[0].popuptec;

btn0.addEventListener('click', () => {
  popupOpen.classList.toggle('show-popup');
  document.getElementById('popup-title').innerHTML = arr1[0].popuptitle;
  document.getElementById('popup-techList1').innerHTML = tech1a;
  document.getElementById('popup-techList2').innerHTML = tech1b;
  document.getElementById('popup-techList3').innerHTML = tech1c;
  document.getElementById('popup-img').src = arr1[0].popupimg;
  document.getElementById('popup-description').innerHTML = arr1[0].popupdescription;
  document.getElementById('popup-live').href = arr1[0].btnlive;
  document.getElementById('popup-source').href = arr1[0].btnsource;
});

const btn1 = document.querySelector('#project-1');
const { 0: tech2a, 1: tech2b, 2: tech2c } = arr1[1].popuptec;

btn1.addEventListener('click', () => {
  popupOpen.classList.toggle('show-popup');
  document.getElementById('popup-title').innerHTML = arr1[1].popuptitle;
  document.getElementById('popup-techList1').innerHTML = tech2a;
  document.getElementById('popup-techList2').innerHTML = tech2b;
  document.getElementById('popup-techList3').innerHTML = tech2c;
  document.getElementById('popup-img').src = arr1[1].popupimg;
  document.getElementById('popup-description').innerHTML = arr1[1].popupdescription;
  document.getElementById('popup-live').href = arr1[1].btnlive;
  document.getElementById('popup-source').href = arr1[1].btnsource;
});

const btn2 = document.querySelector('#project-2');
const { 0: tech3a, 1: tech3b, 2: tech3c } = arr1[2].popuptec;

btn2.addEventListener('click', () => {
  popupOpen.classList.toggle('show-popup');
  document.getElementById('popup-title').innerHTML = arr1[2].popuptitle;
  document.getElementById('popup-techList1').innerHTML = tech3a;
  document.getElementById('popup-techList2').innerHTML = tech3b;
  document.getElementById('popup-techList3').innerHTML = tech3c;
  document.getElementById('popup-img').src = arr1[2].popupimg;
  document.getElementById('popup-description').innerHTML = arr1[2].popupdescription;
  document.getElementById('popup-live').href = arr1[2].btnlive;
  document.getElementById('popup-source').href = arr1[2].btnsource;
});

const closePopupWindow = document.querySelector('.close-popup');
closePopupWindow.addEventListener('click', () => {
  popupOpen.classList.toggle('show-popup');
});

// -------------------------- FORM VALIDACION -----------------

const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
  const emailValue = email.value;
  const upperCase = emailValue.replace(/[^A-Z]/g, '');
  if (upperCase.length > 0) {
    e.preventDefault();
    errorMessage.innerText = 'Please type your email in lowercase';
  }
});

// form rearrange ----------------------
const windowWidth = window.innerWidth;
if (windowWidth > 768) {
  document.getElementById('full_name').disabled = true;
} else {
  document.getElementById('full_name').disabled = false;
}
