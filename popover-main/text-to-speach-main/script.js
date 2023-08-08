const textarea = document.querySelector("textarea"),
    voiceList = document.querySelector("select"),
    speechBtn = document.querySelector("button");

let synth = speechSynthesis,
    isSpeaking = true;

voices();


function voices() {
    for (let voice of synth.getVoices()) {
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        if (voice.name === voiceList.value) {
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}

speechBtn.addEventListener("click", e => {
    e.preventDefault();
    if (textarea.value !== "") {
        // Checks if not speaking, Speak Textarea Text
        if (!synth.speaking) {
            textToSpeech(textarea.value);
        }
        // If text was long, Add Resume and Pause Function
        if (textarea.value.length > 80) {
            setInterval(() => {
                if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true;
                    speechBtn.innerText = "Convert To Speech";
                } else { }
            }, 500);
            if (isSpeaking) {
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            } else {
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            }
        } else {
            speechBtn.innerText = "Convert To Speech";
        }
    }
});

// style code start 

const body = document.querySelector("body");

body.style.display = "flex";

body.style.alignItems = "center";

body.style.justifyContent = "center";

body.style.minHeight = "100vh";

body.style.backgroundColor = "#5256ad";

const wrap = document.querySelector(".wrapper");

wrap.style.width = "370px";

wrap.style.padding = "25px 30px";

wrap.style.borderRadius = "7px";

wrap.style.backgroundColor = "#fff";

wrap.style.boxShadow = "7px 7px 20px rgba(0, 0, 0, 0.05)";

const h1element = document.querySelector("h1");

h1element.style.fontSize = "28px";

h1element.style.fontWeight = "500";

h1element.style.textAlign = "center";

const froms = document.querySelector("form");

froms.style.margin = "35px 0 20px";

const labelone = document.querySelector("#onelabel");

labelone.style.fontSize = "18px";

labelone.style.marginBottom = "5px";

const two = document.querySelector("#twolabel");

two.style.fontSize = "18px";


const textlist = document.querySelector("textarea");

textlist.style.resize = "none";

textlist.style.height = "110px";

textlist.style.fontSize = "15px";

textlist.style.padding = "8px 10px";

textlist.style.border = "1px solid #999";


const sel = document.querySelector("select");

sel.style.fontSize = "14px";

sel.style.background = "none";

const row = document.querySelector(".row");

row.style.display = "flex";

row.style.marginBottom = "20px";

row.style.flexDirection = "column"


const outer = document.querySelector(".outer");

outer.style.height = "47px";

outer.style.display = "flex";

outer.style.padding = "0 10px";

outer.style.alignItems = "center";

outer.style.borderRadius = "5px";

outer.style.justifyContent = "center";

outer.style.border = "1px solid #999";

const btn = document.querySelector("button");

btn.style.height = "52px";

btn.style.color = "#fff";

btn.style.fontSize = "17px";

btn.style.backgroundColor = "#675afe";

btn.style.cursor = "pointer";

btn.style.marginTop = "10px";

btn.style.transition = "0.3s ease";

btn.addEventListener("click", () => {
    btn.style.backgroundColor = "#4534fe";
})