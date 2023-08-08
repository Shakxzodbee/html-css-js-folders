window.addEventListener("load", function (e) {
  var cards = document.querySelectorAll(".cart");
  var button = document.querySelector(".button");
  var sum = 0;
  var total = document.querySelector(".total b");



  for (var i = 0; i <= cards.length - 1; i++) {
    cards[i].addEventListener("click", function () {
      var hasClass = this.classList.contains("cart-active");

      var price = +this.getAttribute("data-price");

      if (hasClass) {
        sum = sum - price;
        this.classList.remove("cart-active");
      } else {
        sum = sum + price;
        this.classList.add("cart-active");
      }

      total.innerHTML = sum + "$";
    });
  }
  button.addEventListener("click", function (e) {
    total.innerHTML = 0;
    for (var i = 0; i <= cards.length - 1; i++) {
      cards[i].classList.remove("cart-active");
    }
  });

  window.onload = function () {
    document.querySelector(".cont_modal").className = "cont_modal";
  };
  var c = 0;
  function open_close() {
    if (c % 2 == 0) {
      document.querySelector(".cont_modal").className =
        "cont_modal cont_modal_active";
      c++;
    } else {
      document.querySelector(".cont_modal").className = "cont_modal";
      c++;
    }
  }
});


const html = document.querySelector('html');

html.style.margin = "0";

html.style.fontSize = "16px";

html.style.backgroundColor = "#eee";

html.style.fontFamily = "Orbitron, sans-serif";

const btn = document.querySelector('.button');

btn.style.padding = "10px 10px 10px 10px";

btn.style.backgroundColor = "transparent";

btn.style.fontWeight = "500";

btn.style.border = "1px solid #eee";

btn.style.cursor = "pointer";

btn.style.fontSize = "16px";

btn.style.fontFamily = "Orbitron, sans-serif";

const h1element = document.querySelector('#h1element');

h1element.style.fontSize = "40px";

h1element.style.fontWeight = "500";

h1element.style.paddingBottom = "20px";

const h1elements = document.querySelector('#h2element');

h1elements.style.fontSize = "40px";

h1elements.style.fontWeight = "500";

h1elements.style.paddingBottom = "20px";


const listItem = document.querySelector('#listItem');

listItem.style.display = "flex";

listItem.style.alignItems = "center";

listItem.style.justifyContent = "center";

const listItems = document.querySelector('#listItems');

listItems.style.display = "flex";

listItems.style.alignItems = "center";

listItems.style.justifyContent = "center";

const totalImg = document.querySelector('#totalImg');

totalImg.style.width = "20px";

totalImg.style.height = "20px";

const total = document.querySelector('.total');

total.style.display = "flex";

total.style.alignItems = "center";

total.style.gap = "10px";

total.style.backgroundColor = "#fff";

total.style.boxShadow = "0 0 2px #0000004D";

total.style.marginTop = "15px";

total.style.padding = "20px";

total.style.width = "350px";

total.style.position = "fixed";

total.style.right = "0px";

total.style.top = "300px";

const mainTitle = document.querySelector('.main-title');

mainTitle.style.textAlign = "center";

mainTitle.style.fontWeight = "normal";

mainTitle.style.fontSize = "60px";

const conta = document.querySelector('.container');

conta.style.width = "1140px";

conta.style.marginRight = "auto";

conta.style.marginLeft = "auto";

conta.style.paddingRight = "15px";

conta.style.paddingLeft = "15px";

const cardBody = document.querySelector('.card-body');

cardBody.style.padding = "20px";

cardBody.style.textAlign = "center";

// const html = document.querySelector('html');

// html.style.margin = "0";

// html.style.fontSize = "16px";

// html.style.backgroundColor = "#eee";

// html.style.fontFamily = "Orbitron, sans-serif";

// const btn = document.querySelector('.button');

// btn.style.padding = "10px 10px 10px 10px";

// btn.style.backgroundColor = "transparent";

// btn.style.fontWeight = "500";

// btn.style.border = "1px solid #eee";

// btn.style.cursor = "pointer";

// btn.style.fontSize = "16px";

// btn.style.fontFamily = "Orbitron, sans-serif";

// const h1element = document.querySelector('#h1element');

// h1element.style.fontSize = "40px";

// h1element.style.fontWeight = "500";

// h1element.style.paddingBottom = "20px";

// const h1elements = document.querySelector('#h2element');

// h1elements.style.fontSize = "40px";

// h1elements.style.fontWeight = "500";

// h1elements.style.paddingBottom = "20px";


// const listItem = document.querySelector('#listItem');

// listItem.style.display = "flex";

// listItem.style.alignItems = "center";

// listItem.style.justifyContent = "center";

// const listItems = document.querySelector('#listItems');

// listItems.style.display = "flex";

// listItems.style.alignItems = "center";

// listItems.style.justifyContent = "center";

// const totalImg = document.querySelector('#totalImg');

// totalImg.style.width = "20px";

// totalImg.style.height = "20px";

// const total = document.querySelector('.total');

// total.style.display = "flex";

// total.style.alignItems = "center";

// total.style.gap = "10px";

// total.style.backgroundColor = "#fff";

// total.style.boxShadow = "0 0 2px #0000004D";

// total.style.marginTop = "15px";

// total.style.padding = "20px";

// total.style.width = "350px";

// total.style.position = "fixed";

// total.style.right = "0px";

// total.style.top = "300px";

// const mainTitle = document.querySelector('.main-title');

// mainTitle.style.textAlign = "center";

// mainTitle.style.fontWeight = "normal";

// mainTitle.style.fontSize = "60px";

// const conta = document.querySelector('.container');

// conta.style.width = "1140px";

// conta.style.marginRight = "auto";

// conta.style.marginLeft = "auto";

// conta.style.paddingRight = "15px";

// conta.style.paddingLeft = "15px";

// const cardBody = document.querySelector('.card-body');

// cardBody.style.padding = "20px";

// cardBody.style.textAlign = "center";