const appTitle = document.getElementsByClassName('app-title');
const appImg = document.getElementsByClassName('app-img');

var current = 0;

console.log(appTitle);
console.log(appImg);

setInterval(myMethod, 2000);

function myMethod() {
  appTitle[current].classList.remove('current');
  if (current == 2) {
    current = 0;
  } else {
    current++;
  }
  appTitle[current].classList.add('current');
  appImg[0].src = 'img/App_' + current + '.png';
}
