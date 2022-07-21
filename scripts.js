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
              seeLive: 'https://camilovelag.github.io/MV_Portfolio/',
              seeSource: 'https://github.com/Camilovelag/MV_Portfolio'};

const openPopupWindow = document.querySelector('.project-1');

openPopupWindow.addEventListener('click', () => {
  const div7 = document.querySelector('#popup');
  div7.classList.toggle('show-popup');
  document.getElementById('popup-title').innerHTML = proj1.title;
  document.getElementById('popup-img').src = proj1.img;
  document.getElementById('popup-description').innerHTML = proj1.description;
  document.getElementById("see-live > a").src = proj1.seeLive;
  document.getElementById("see-source > a").href = proj1.seeSource;

});

// Close popup
const closePopupWindow = document.querySelector('.popup-btn');

closePopupWindow.addEventListener('click', () => {
  const div8 = document.querySelector('#popup');
  div8.classList.toggle('show-popup');
});

// ---------------------------- WORK CARDS INFO ----------------------------------

// const proj2 = {title: 'Profesional Art Printing Data',
//               img: './images/card_works_background-alt-1.png',
//               description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry´s standard',
//               seeLive: 'https://camilovelag.github.io/MV_Portfolio/',
//               seeSource: 'https://github.com/Camilovelag/MV_Portfolio'};

// document.getElementById('card-works-title').innerHTML = proj2.title;
// document.getElementById('card-works-description').innerHTML = proj2.description;

// const openPopupWindow2 = document.querySelector('.project-2');

// openPopupWindow2.addEventListener('click', () => {
//   const div8 = document.querySelector('#popup');
//   div8.classList.toggle('show-popup');
//   document.getElementById('popup-title').innerHTML = proj2.title;
//   document.getElementById('popup-img').src = proj2.img;
//   document.getElementById('popup-description').innerHTML = proj2.description;
//   document.getElementById("see-live > a").src = proj2.seeLive;
//   document.getElementById("see-source > a").href = proj2.seeSource;

// });

// ---------------------------- WORK CARDS INFO ----------------------------------

const arr1 = [
  {
    id: 0,
    popuptitle: 'Multi-Post Stories',
    popupdescription: 'This is the first This is the firtst A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry standard dummy test number 1',
    popuptec: ['CSS', 'Html', 'Bootstrap', 'Ruby'],
    popupimg: './pictures/golf.jpg',
    btnlive: 'https://www.github.com',
    btnsource: 'https://www.github.com',
    btnName: 'btn1',
    btnimg1: './pictures/TimeAndIcons/github.png',
    btnimg2: './pictures/TimeAndIcons/github.png',
  },
  {
    id: 1,
    popuptitle: 'Multi-Post Stories',
    popupdescription: 'This is the second A daily for this is a test and is test number 2',
    popuptec: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    popupimg: './pictures/beach.jpg',
    btnlive: 'https://www.github.com',
    btnsource: 'https://www.github.com',
    btnName: 'btn3',
    btnimg1: './pictures/TimeAndIcons/github.png',
    btnimg2: './pictures/TimeAndIcons/github.png',
  },
  {
    id: 2,
    popuptitle: 'Multi-Post Stories',
    popupdescription: 'This is the third A daily for this is a test and is test number 3',
    popuptec: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    popupimg: './pictures/desert.jpg',
    btnlive: 'https://www.github.com',
    btnsource: 'https://www.github.com',
    btnName: 'btn4',
    btnimg1: './pictures/TimeAndIcons/github.png',
    btnimg2: './pictures/TimeAndIcons/github.png',
  },
];

const lang1 = arr1[0].popuptec[0];
const lang2 = arr1[0].popuptec[1];
const lang3 = arr1[0].popuptec[2];
const lang4 = arr1[0].popuptec[3];

if (window.matchMedia('(max-width: 768px)').matches) {
  document.getElementById('Portfolio-menu').innerHTML = arr1.map((items) => `<div class="work1">
                <img src="${items.popupimg}"  alt="temporary image while project is completed" class="projectpic1">
                <div class="jobdesc"  >
                <p class="work1title">${items.popuptitle}</p>
                <p class="workdescription" id="firstcard">${items.popupdescription}</p>
                <ul class="usedcode">
                    <li class="pop">${items.popuptec[0]}</li>
                    <li class="pop">${items.popuptec[1]}</li>
                    <li class="pop">${items.popuptec[2]}</li>
                    <li class="pop">${items.popuptec[3]}</li>
                </ul>
                    <button type="submit" id="${items.btnName}">See Project</button>
                </div>
                </div>`).join('');
} else {
  document.getElementById('Portfolio-menu').innerHTML = arr1.map((items) => `<div class="work1">
                <img src="${items.popupimg}" style="order:${(items.id % 2) + 1}" alt="temporary image while project is completed" class="projectpic1">
                <div class="jobdesc" style="order:${items.id % 2 === 0 ? 2 : 1}">
                <p class="work1title">${items.popuptitle}</p>
               <p class="workdescription" id="firstcard">${items.popupdescription}</p>
                <ul class="usedcode">
                   <li class="pop">${items.popuptec[0]}</li>
                    <li class="pop">${items.popuptec[1]}</li>
                    <li class="pop">${items.popuptec[2]}</li>
                   <li class="pop">${items.popuptec[3]}</li>
               </ul>
                   <button type="submit" id="${items.btnName}">See Project</button>
               </div>
             </div>`).join('');
}

// const btn1 = document.querySelector('#btn1');
// const popUp1 = document.getElementById('popUp1');

// btn1.addEventListener('click', () => {
//   popUp1.classList.toggle('popUpactive');
//   popUp1.style.display = 'block';
//   document.getElementById('popuptitle').innerHTML = arr1[0].popuptitle;
//   document.getElementById('popupdescription').innerHTML = arr1[0].popupdescription;
//   document.getElementById('popupimg').src = arr1[0].popupimg;
//   document.getElementById('popuptec1').innerHTML = lang1;
//   document.getElementById('popuptec2').innerHTML = lang2;
//   document.getElementById('popuptec3').innerHTML = lang3;
//   document.getElementById('popuptec4').innerHTML = lang4;
//   document.getElementById('see_live1').href = arr1[0].btnlive;
//   document.getElementById('see_source1').href = arr1[0].btnsource;
//   document.getElementById('btnimg1').src = arr1[0].btnimg1;
//   document.getElementById('btnimg2').src = arr1[0].btnimg2;
// });

// const btn3 = document.querySelector('#btn3');

// btn3.addEventListener('click', () => {
//   popUp1.classList.toggle('popUpactive');
//   popUp1.style.display = 'block';
//   document.getElementById('popuptitle').innerHTML = arr1[1].popuptitle;
//   document.getElementById('popupdescription').innerHTML = arr1[1].popupdescription;
//   document.getElementById('popupimg').src = arr1[1].popupimg;
//   document.getElementById('popuptec1').innerHTML = lang1;
//   document.getElementById('popuptec2').innerHTML = lang2;
//   document.getElementById('popuptec3').innerHTML = lang3;
//   document.getElementById('popuptec4').innerHTML = lang4;
//   document.getElementById('see_live1').href = arr1[1].btnlive;
//   document.getElementById('see_source1').href = arr1[1].btnsource;
//   document.getElementById('btnimg1').src = arr1[1].btnimg1;
//   document.getElementById('btnimg2').src = arr1[1].btnimg2;
// });

// const btn4 = document.querySelector('#btn4');

// btn4.addEventListener('click', () => {
//   popUp1.classList.toggle('popUpactive');
//   popUp1.style.display = 'block';
//   document.getElementById('popuptitle').innerHTML = arr1[2].popuptitle;
//   document.getElementById('popupdescription').innerHTML = arr1[2].popupdescription;
//   document.getElementById('popupimg').src = arr1[2].popupimg;
//   document.getElementById('popuptec1').innerHTML = lang1;
//   document.getElementById('popuptec2').innerHTML = lang2;
//   document.getElementById('popuptec3').innerHTML = lang3;
//   document.getElementById('popuptec4').innerHTML = lang4;
//   document.getElementById('see_live1').href = arr1[2].btnlive;
//   document.getElementById('see_source1').href = arr1[2].btnsource;
//   document.getElementById('btnimg1').src = arr1[2].btnimg1;
//   document.getElementById('btnimg2').src = arr1[2].btnimg2;
// });

// const btn2 = document.querySelector('.btn2');

// btn2.addEventListener('click', () => {
//   popUp1.style.display = 'none';
// });

