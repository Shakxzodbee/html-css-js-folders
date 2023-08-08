//Switch clock format
const formatSwitchBtn = document.querySelector(".format-switch-btn");
const text = document.querySelector('.clock-format-text');
text.style.color = '#efefef';
text.style.fontSize = '1em';
text.style.marginRight = '20px';
formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if (formatValue === "12") {
        formatSwitchBtn.setAttribute("data-format", "24");
    }
    else {
        formatSwitchBtn.setAttribute("data-format", "12");
    }


})


//Get time
function clock() {
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = 'AM';

    //Period(AM / PM)
    if (hours >= 12) {
        period = "PM"
    }


    //24 hour format
    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if (formatValue === "12") {
        hours = hours > 12 ? hours % 12 : hours;
    }

    if (formatValue === "12") {
        text.textContent = '12 hours format'
    } else {
        text.textContent = '24 hours format'
    }


    //Add the 0 values lower 10

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }


    if (seconds < 10) {
        seconds = "0" + seconds
    }


    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".period").innerHTML = period;
    document.querySelector(".seconds").innerHTML = seconds;
}

var updateClock = setInterval(clock, 1000)




const body = document.querySelector('body');
body.style.background = "#2e2e44";
body.style.transition = '.5s';
body.style.listStyle = 'none';

const section = document.querySelector('section');
section.style.display = 'flex';
section.style.justifyContent = 'center';
section.style.alignItems = 'center';


const h2element = document.querySelector('h2');
h2element.style.margin = "20px";
h2element.style.color = "#fff";
h2element.style.textAlign = 'center';
h2element.style.opacity = '0.5';

h2element.addEventListener('mouseout', () => {
    h2element.style.cursor = 'pointer';
    h2element.style.color = '#333';
    h2element.style.transition = '.5s';
    h2element.style.opacity = '1';
})


h2element.addEventListener('mouseup', () => {
    h2element.style.cursor = 'pointer';
    h2element.style.color = '#db3333';
    h2element.style.transition = '.5s';
    h2element.style.opacity = '0.5';
})




//hover hodisasi
// mouseup bosilganda ishlaydi 