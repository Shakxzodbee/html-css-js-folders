const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const exchageIcon = document.querySelector(".exchange");
const selectTag = document.querySelectorAll("select");
const icons = document.querySelectorAll(".row i");
const translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "de-DE" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
        tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
    if (!fromText.value) {
        toText.value = "";
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
    if (!text) return;
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            if (data.id === 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });
});

icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        if (!fromText.value || !toText.value) return;
        if (target.classList.contains("fa-copy")) {
            if (target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let utterance;
            if (target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});



const body = document.querySelector('body');
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.padding = "0 10px";
body.style.minHeight = "100vh";
body.style.backgroundColor = "#06283D";
body.style.fontFamily = "'Poppins', sans-serif";


const conta = document.querySelector(".container");
conta.style.maxWidth = "690px";
conta.style.width = "100%";
conta.style.padding = "30px";
conta.style.background = "#fff";
conta.style.borderRadius = "7px";
conta.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.01)";

const wrap = document.querySelector('.wrapper');
wrap.style.borderRadius = "5px";
wrap.style.border = "1px solid #ccc";
wrap.style.borderBottom = "1px solid #ccc";


const textint = document.querySelector('.text-input');
textint.style.display = "flex";
textint.style.borderBottom = "1px solid #ccc";


toText.style.borderRadius = "0px";
toText.style.borderLeft = "1px solid #ccc";


const textArea = document.querySelector('#one');
textArea.style.height = "250px";
textArea.style.width = "100%";
textArea.style.outline = "none";
textArea.style.resize = "none";
textArea.style.background = "none";
textArea.style.fontSize = "18px";
textArea.style.padding = "10px 15px";
textArea.style.borderRadius = "5px";

const two = document.querySelector('#two');
two.style.height = "250px";
two.style.width = "100%";
two.style.outline = "none";
two.style.resize = "none";
two.style.background = "none";
two.style.fontSize = "18px";
two.style.padding = "10px 15px";
two.style.borderRadius = "5px";


const control  = document.querySelector('.controls');
control.style.listStyle = "none";
control.style.padding = "12px 15px";
control.style.display = "flex";
control.style.alignItems = "center";
control.style.justifyContent = "space-between";


const icon = document.querySelector('#iconsone');
icon.style.display = "flex";
icon.style.alignItems = "center";
icon.style.justifyContent = "space-between";
// icon.style.paddingLeft = "15px";
// icon.style.borderLeft = "1px solid #ccc";


const icone = document.querySelector('#iconstwo');
icone.style.display = "flex";
icone.style.alignItems = "center";
icone.style.justifyContent = "space-between";


const i = document.querySelector('i');
i.style.display = "flex";
i.style.justifyContent = "space-between";
i.style.alignItems = "center";

const li = document.querySelector('#lione');
li.style.display = "flex";
li.style.alignItems = "center";
li.style.justifyContent = "space-between";

const litwo = document.querySelector('#litwo');
litwo.style.display = "flex";
litwo.style.alignItems = "center";
litwo.style.justifyContent = "space-between";

const iconss = document.querySelector('.icons');
iconss.style.width = "38%";
iconss.style.paddingRight = "15px";
iconss.style.borderRight = "1px solid #ccc";

const to = document.querySelector('#to');
to.style.width = "50px";
to.style.color = "#adadad";
to.style.fontSize = "14px";
to.style.cursor = "pointer";
to.style.transition = "transform 0.2s ease";
to.style.justifyContent = "center";

const tos = document.querySelector('#tos');
tos.style.color = "#adadad";
tos.style.fontSize = "14px";
tos.style.cursor = "pointer";
tos.style.transition = "transform 0.2s ease";
tos.style.justifyContent = "center";

const forms = document.querySelector('#from');
forms.style.width = "50px";
forms.style.color = "#adadad";
forms.style.fontSize = "14px";
forms.style.cursor = "pointer";
forms.style.transition = "transform 0.2s ease";
forms.style.justifyContent = "center";

const form = document.querySelector('#fromtwo');
form.style.color = "#adadad";
form.style.fontSize = "14px";
form.style.cursor = "pointer";
form.style.transition = "transform 0.2s ease";
form.style.justifyContent = "center";

const selects = document.querySelector('#sel');
selects.style.color = "#333";
selects.style.border = "none";
selects.style.outline = "none";
selects.style.fontSize = "18px";
selects.style.background = "none";
selects.style.paddingLeft = "5px";

const selected = document.querySelector('#sels');
selected.style.color = "#333";
selected.style.border = "none";
selected.style.outline = "none";
selected.style.fontSize = "18px";
selected.style.background = "none";
selected.style.paddingRight = "5px";

translateBtn.style.width = "100%";
translateBtn.style.padding = "14px";
translateBtn.style.outline = "none";
translateBtn.style.border = "none";
translateBtn.style.color = "#fff";
translateBtn.style.cursor = "pointer";
translateBtn.style.marginTop = "20px";
translateBtn.style.fontSize = "17px";
translateBtn.style.borderRadius = "5px";
translateBtn.style.background = "#06283D";


const exchange = document.querySelector('.exchange');
exchange.style.color = "#adadad";
exchange.style.cursor = "pointer";
exchange.style.fontSize = "16px";
exchange.style.transition = "transform 0.2s ease";