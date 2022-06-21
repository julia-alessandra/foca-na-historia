/**Java script do menu
código baseado nos slides de laboratorio de programação web: https://fegemo.github.io/cefet-front-end/classes/js2/#menu-lateral**/
let botaoEl = document.querySelector('#alterna-menu');
let bodyEl = document.querySelector('body');

function alternaMenu() {
  bodyEl.classList.toggle('menu-visivel');
}

botaoEl.addEventListener('click', alternaMenu);
