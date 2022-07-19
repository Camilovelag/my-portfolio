function showMenu() {
  let div = document.querySelector('#links-container');
  div.classList.toggle('active-menu');

  let div2 = document.querySelector('#hamburger-btn');
  div2.classList.toggle('switch-btn');

  let div3 = document.querySelector('#header-logo');
  div3.classList.toggle('active-logo');
  }