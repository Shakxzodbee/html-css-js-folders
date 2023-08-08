const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hiddenModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
function clickOverlay() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

showBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hiddenModal);
overlay.addEventListener("click", clickOverlay);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

function showModal(){
  setTimeout(()=>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  } , 2000)
}