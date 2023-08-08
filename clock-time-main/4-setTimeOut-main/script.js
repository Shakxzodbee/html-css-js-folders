'use strict';

const btn = document.querySelector('#btn');

function myAnimation() {
  const car = document.querySelector('.car');
  let pos = 0;

  const timerId = setInterval(frame, 10);

  function frame() {
    if (pos === 700) {
      clearInterval(timerId);
    } else {
      pos++;
      car.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);

const button = document.querySelector('button');
button.style.width = '100px';
button.style.height = '50px';
button.style.color = '#fff';
button.style.border = 'none';
button.style.outline = 'none';
button.style.cursor = 'pointer';
button.style.marginTop = "30px";
button.style.backgroundColor = "rgb(117, 117, 236)";

const img = document.querySelector('img');
img.style.objectFit = 'cover';
img.style.width = '200px';
img.style.height = '150px';

const car = document.querySelector('.car');
car.style.height = '100px';
car.style.width = '900px';
car.style.position = 'absolute';



const btne = document.querySelector('.btn');
btne.style.width = '100px';
btne.style.margin = '0 auto';


const wrapper = document.querySelector('.wrapper');
wrapper.style.width = '900px';
wrapper.style.height = '100px';
wrapper.style.margin = '0 auto';
wrapper.style.position = 'relative';
wrapper.style.backgroundColor = 'rgb(117, 117, 236)';