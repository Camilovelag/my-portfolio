function showMenu() {
  let div = document.querySelector('#links-container');
  div.classList.toggle('active-menu');

  let div2 = document.querySelector('#hamburger-btn');
  div2.classList.toggle('switch-btn');

  let div3 = document.querySelector('#header-logo');
  div3.classList.toggle('active-logo');
  }

function hideMenu() {
  let div4 = document.querySelector('#links-container');
  div4.classList.remove('active-menu');

  let div5 = document.querySelector('#hamburger-btn');
  div5.classList.remove('switch-btn');

  let div6 = document.querySelector('#header-logo');
  div6.classList.remove('active-logo');
}