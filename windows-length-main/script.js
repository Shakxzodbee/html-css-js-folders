const w = document.querySelector('.width');
const h = document.querySelector('.height');


const y = window.innerWidth;
const x = window.innerHeight;



w.textContent = `Width: ${y}`;
h.textContent = `Height : ${x}`;



const body = document.querySelector('body');
body.style.paddingTop = "220px";
body.style.backgroundColor = "#333";
body.style.color = "#fff";



const h1Element = document.querySelector('h1');
h1Element.style.display = "flex";
h1Element.style.justifyContent = "center";
h1Element.style.alignItems = "center";
h1Element.style.margin = "auto";

h1Element.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
h1Element.style.width = "fit-content";



h.style.display = "flex";
h.style.justifyContent = "center";
h.style.alignItems = "center";
h.style.margin = "auto";
h.style.width = "fit-content";

h.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
h.style.width = "fit-content";