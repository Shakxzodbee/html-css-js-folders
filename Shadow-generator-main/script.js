const preview = document.getElementById("preview"),
    styles = document.getElementById("styles"),
    ranges = document.querySelectorAll(".settings input"),
    copyButton = document.getElementById("copy-styles");

// Add event listener to each range input
ranges.forEach((slider) => {
    slider.addEventListener("input", generateStyles);
});

// Function to generate and update styles
function generateStyles() {
    const xShadow = document.getElementById("x-shadow").value;
    const yShadow = document.getElementById("y-shadow").value;
    const blurRadius = document.getElementById("blur-r").value;
    const spreadRadius = document.getElementById("spread-r").value;
    const shadowColor = document.getElementById("shadow-color").value;
    const shadowOpacity = document.getElementById("shadow-opacity").value;
    const shadowInset = document.getElementById("inset-shadow").checked;
    const borderRadius = document.getElementById("border-r").value;

    // Create the box shadow CSS property value
    const boxShadow = `${shadowInset ? "inset " : ""} ${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowOpacity)}`;

    // Update the preview element styles
    preview.style.boxShadow = boxShadow;
    preview.style.borderRadius = `${borderRadius}px`;

    // Update textarea with generated styles
    styles.textContent = `box-shadow: ${boxShadow};\nborder-radius: ${borderRadius}px;`;

}

// Function to convert hex color and opacity to rgba format
function hexToRgba(shadowColor, shadowOpacity) {
    const r = parseInt(shadowColor.substr(1, 2), 16);
    const g = parseInt(shadowColor.substr(3, 2), 16);
    const b = parseInt(shadowColor.substr(5, 2), 16);

    return `rgba(${r}, ${g}, ${b}, ${shadowOpacity})`;
}

// Function to copy the generated styles
function copyStyles() {
    styles.select();
    document.execCommand("copy");
    copyButton.innerText = "Copied!";
    setTimeout(() => {
        copyButton.innerText = "Copy Styles";
    }, 500);
}

generateStyles();


const body = document.querySelector("body");
body.style.backgroundColor = "#311b92";

const label = document.querySelector("label");
label.style.fontSize = "14px";

const conts = document.querySelector(".container");
conts.style.backgroundColor = "#fff";
conts.style.position = "absolute";
conts.style.transform = "translate(-50%, -50%)";
conts.style.top = "50%";
conts.style.left = "50%";
conts.style.padding = "30px";
conts.style.width = "80vmin";
conts.style.borderRadius = "25px";
conts.style.boxShadow = " 0 20px 40px rgba(2, 42, 83, 0.2)";

const result = document.querySelector(".result");
result.style.padding = "20px 0 120px";

const previews = document.getElementById("preview");
previews.style.backgroundColor = "#311b92";
previews.style.width = "200px";
previews.style.height = "200px";
previews.style.position = "relative";
previews.style.margin = "auto";
previews.style.borderRadius = "70px";
previews.style.boxShadow = "-6px 15px 30px 6px rgba(0, 0, 0, 0.5)";

const range = document.querySelector(".range-wrapper");
range.style.display = "flex";
range.style.flexDirection = "column";
range.style.justifyContent = "space-between";

const color = document.querySelector("#color-wrapper");
color.style.display = "flex";
color.style.flexDirection = "column";
color.style.justifyContent = "space-between";



const code = document.querySelector(".code-container");
code.style.display = "grid";
code.style.gap = "10px";
code.style.marginTop = "20px";

const btn = document.querySelector("button");
btn.style.backgroundColor = "#311b92";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.style.border = "none";
btn.style.color = "#fff";

const texts = document.querySelector("textarea");
texts.style.resize = "none";
texts.style.padding = "5px";
texts.style.border = "1px solid #000";
texts.style.borderRadius = "5px";

const int = document.querySelector(".input-wrapper");
int.style.display = "flex";
int.style.alignItems = "center";
int.style.gap = "5px";

const colwrap = document.querySelector("#color-wrapper");
colwrap.style.display = "flex";
colwrap.style.flexDirection = "row";
colwrap.style.justifyContent = "flex-start";
colwrap.style.alignItems = "center";
colwrap.style.gap = "5px";