/**Java script do menu**/

const itensDoMenu = document.querySelectorAll('#menu-principal li');

itensDoMenu.forEach(el => el.addEventListener('click', ativaItemMenu));

function ativaItemMenu(e) {
  itensDoMenu.forEach(el => el.classList.remove('menu-ativo'));
  e.currentTarget.classList.add('menu-ativo');
}


let botaoEl = document.querySelector('#alterna-menu');
let bodyEl = document.querySelector('nav');

function alternaMenu() {
  bodyEl.classList.toggle('menu-visivel');
}

botaoEl.addEventListener('click', alternaMenu);
/**js do titulo*/

let deg = 6;
for (let i = 1; i <= 20; i++) {
  let div = document.querySelector("#container div:nth-child(" + i + ")");
  div.style.transform = 'rotate(' + deg + 'deg)';
  deg = deg + 6;
}
