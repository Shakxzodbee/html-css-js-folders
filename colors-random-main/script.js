function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
for (let i = 0;i<=778;i++){
    const newBtn=document.createElement("button");

    document.body.append(newBtn);

    newBtn.style.width = "40px";

    newBtn.style.height = "40px";

    newBtn.style.border = "0";

    newBtn.style.color = "#fff";

    newBtn.style.borderRadius = "2px";

    newBtn.style.outline = "none";

    newBtn.style.cursor = "pointer";

    newBtn.style.padding = "0";

    newBtn.style.margin = "0";

    newBtn.style.backgroundColor = "blandchedalmond";
}

const btn = document.querySelectorAll("button");
btn.forEach(item=>{
    item.addEventListener('touchmove',(e)=>{
        e.target.style.backgroundColor=`rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`; });
    item.addEventListener('mouseenter',(e)=>{
        e.target.style.backgroundColor=`rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`;
        
    });
        
});
const body  = document.querySelector('body');

body.style.padding = "0";

body.style.margin = "0";

body.style.border = "0";