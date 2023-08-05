let optionsButtons = document.querySelectorAll(".option-button");

let advancedOptionButton = document.querySelectorAll(".adv-option-button");

let fontName = document.getElementById("fontName");

let fontSizeRef = document.getElementById("fontSize");

let writingArea = document.getElementById("text-input");

let linkButton = document.getElementById("createLink");

let alignButtons = document.querySelectorAll(".align");

let spacingButtons = document.querySelectorAll(".spacing");

let formatButtons = document.querySelectorAll(".format");

let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

const intializer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

window.onload = intializer();


const body = document.querySelector('body');
body.style.backgroundColor = "#338cf4";

const conta = document.querySelector('.container');
conta.style.backgroundColor = "#fff";
conta.style.width = "90vmin";
conta.style.padding = "50px 30px";
conta.style.position = "absolute";
conta.style.top = "50%";
conta.style.left = "50%";
conta.style.transform = "translate(-50%, -50%)";
conta.style.borderRadius = "10px";
conta.style.boxShadow = "0 25px 50px rgba(7, 20, 35, 0.2)";


const option = document.querySelector('.options');
option.style.display = "flex";
option.style.alignItems = "center";
option.style.gap = "15px";

const btn = document.querySelector('button');
btn.style.placeItems = "center";
btn.style.width = "28px";
btn.style.height = "28px";
btn.style.display = "grid";
btn.style.border = "none";
btn.style.backgroundColor = "#fff";
btn.style.cursor = "pointer";
btn.style.color = "#020929";
btn.style.outline = "none";
btn.style.borderRadius = "3px";


const select = document.querySelector('select');
select.style.padding = "7px";
select.style.border = "1px solid #020929";
select.style.borderRadius = "3px";
select.style.cursor = "pointer";


const avtiv = document.querySelector('.avtive');
avtiv.style.backgroundColor = "#e0e9ff";


const int = document.querySelector('#text-input');
int.style.marginTop = "10px";
int.style.padding = "20px";
int.style.height = "50vh";
int.style.border = "1px solid #ddd";