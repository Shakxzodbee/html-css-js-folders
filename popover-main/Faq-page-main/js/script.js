$(".open").click(function() {
    let container = $(this).parents(".topic");
  
    let answer = container.find(".answer");
  
    let trigger = container.find(".faq-t");
  
    answer.slideToggle(200);
  
    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
    } else {
      trigger.addClass("faq-o");
    }
  
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    } else {
      container.addClass("expanded");
    }
  });


const body = document.querySelector('body');

body.style.backgroundColor = "#f5f5f5";
body.style.color = "#444";
body.style.fontFamily = "'Poppins', sans-serif";


const main = document.querySelector('main');

main.style.display = "block";
main.style.position = "relative";
main.style.boxSizing = "border-box";
main.style.padding = "30px";
main.style.width = "100%";
main.style.backgroundColor = "#fff";
main.style.margin = "0 auto";
main.style.marginTop = "50px";
main.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.1)";


const h1element = document.querySelector('h1');

h1element.style.paddingLeft = "20px";
h1element.style.paddingRight = "20px";
h1element.style.fontSize = "32px";
h1element.style.fontWeight = "400px";
h1element.style.textAlign = "center";


const open = document.getElementsByClassName("open");

open.style.cursor = "pointer";
open.style.display = "block";
open.style.padding = "0px";


answer.style.fontSize = "16px";
answer.style.display = "none";
answer.style.marginBottom = "30px";
answer.style.textAlign = "justify";
answer.style.paddingLeft = "20px";
answer.style.paddingRight = "20px";




const question = document.querySelector('.question');

question.style.padding = "30px 40px 20px 0";
question.style.fontSize = "18px";
question.style.fontWeight = "500";
question.style.color = "#195d78";




// .open:hover {
//   opacity: 0.7;
// }