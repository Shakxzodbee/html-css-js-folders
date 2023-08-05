function Strength(password) {
    let i = 0;
    if (password.length > 6) {
        i++
    }if(password.length > 10) {
        i++
    }if(/[A-Z]/.test(password)){
        i++
    }if(/[0-9]/.test(password)){
        i++
    }if(/[A-Za-z0-8]/.test(password)){
        i++
    }
return i;
}

let container = document.querySelector('.container');
document.addEventListener("keyup" , function(e){
    let password = document.querySelector('#YourPassword').value;

    let strength = Strength(password);
    if(strength<2){
        container.classList.add("weak");
        container.classList.remove("moderate");
        container.classList.remove("strong");
    }else if(strength > 2 && strength < 4){
        container.classList.remove("wear");
        container.classList.add("moderate");
        container.classList.remove("strong");
    }else{
        container.classList.remove("weak");
        container.classList.remove("moderate");
        container.classList.add("strong");
    }
});



let password = document.querySelector('#YourPassword');
let show = document.querySelector('.show');

show.onclick = function(){
    if(password.type =="password"){
        password.setAttribute("type", "text");
        show.classList.add("hide");
    }else{
        password.setAttribute("type" , "password");
        show.classList.remove("hide");
    }
};


// css style code 

let body = document.querySelector('body');
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.background = "#000";
body.style.minHeight = "100vh";

let h2Element = document.querySelector('h2');
h2Element.style.color  = "#666";


let input = document.querySelector('input');
input.style.position = "relative";
input.style.width = "100%";
input.style.background = "#222";
input.style.border = "none";
input.style.outline = "none";
input.style.padding = "10px";
input.style.color = "aliceblue";
input.style.fontSize = "1.1em";