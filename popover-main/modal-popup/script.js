const body = document.querySelector("body");
body.style.minHeight = "100vh";
body.style.width = "100%";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "rgba(0,213,255,1)";
body.style.position = "relative";

const modal = document.getElementsByClassName = "modal-overlay";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
modal.style.display = "flex";
modal.style.justifyContent = 'center';
modal.style.alignItems = "center";
modal.style.opacity = "0";
modal.style.visibility = "hidden";
modal.style.transition = "opacity 0.3s ease , visibility 0.3s ease";

const modals = document.getElementsByClassName = "modal";
modals.style.padding = "20px";
modals.style.borderRadius = "5px";
modals.style.maxWidth = "350px";
modals.style.opacity = "0";

const header = document.querySelector(".modal-header");
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

const content = document.querySelector(".modal-content");
content.style.marginTop = "20px";

const open = document.querySelector(".open-modal-btn");
open.style.padding = "10px 20px";


const atribut = document.querySelector(".attribute");
atribut.style.position = "absolute";
atribut.style.bottom = "10px";

const btn  = document.querySelector(".close-modal-btn");
btn.style.backgroundColor = "transparent";
btn.style.border = "none";
btn.style.color = "#333";
btn.style.fontSize = "24px";
btn.style.cursor = "pointer";

const body = document.querySelector("body");
body.style.minHeight = "100vh";
body.style.width = "100%";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.fontFamily = "sans-serif";
body.style.position = "relative";