
/**Java script do menu**/
let botaoEl = document.querySelector('#alterna-menu');
let bodyEl = document.querySelector('body');

function alternaMenu() {
  bodyEl.classList.toggle('menu-visivel');
}

botaoEl.addEventListener('click', alternaMenu);

let deg = 6;
for (let i = 1; i <= 20; i++) {
  let div = document.querySelector(".container div:nth-child(" + i + ")");
  div.style.transform = 'rotate(' + deg + 'deg)';
  deg = deg + 6;
}
