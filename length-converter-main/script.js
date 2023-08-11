const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const baseLengthSelect = document.getElementById('baseLength');
const targetLengthSelect = document.getElementById('targetLength');
const conversionResult = document.getElementById('conversionResult');

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const baseLength = baseLengthSelect.value;
  const targetlength = targetLengthSelect.value;

  if (isNaN(amount) || amount <= 0) {
    alert('Invalid amount. Please enter a positive number.');
    conversionResult.style.color = 'red';
    conversionResult.textContent = 'Invalid amount. Please enter a positive number.'
    return;
    }

  conversionResult.style.color = 'inherit';
  

  const conversionRate = getConversionRate(baseLength, targetlength);
  const convertedAmount = amount * conversionRate;

  conversionResult.textContent = `${amount} ${baseLength} = ${convertedAmount} ${targetlength}`;
});

function getConversionRate(baseLength, targetLenth) {
  const exchangeRates = {
    km: {
      m: 1000,
      cm: 100000,
      mm: 1000000
    },
    m: {
      km: 0.001,
      cm: 100,
      mm: 1000
    },
    cm: {
        km: 0.00001,
        m: 0.01,
        mm: 10
    },
    mm: {
        km: 0.0000001,
        m: 0.001,
        cm: 0.1
    }
  };

  return exchangeRates[baseLength][targetLenth];
}


// style code start 
const body = document.querySelector("body");
body.style.minHeight = "100vh";
body.style.width = "100%";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#0A2647";
body.style.position = "relative";

const container = document.querySelector(".container");
container.style.height = "400px";
container.style.width = "350px";
container.style.display = 'flex';
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.textAlign = "center";
container.style.backgroundColor = "#cecece";
container.style.border = "10px solid rgba(0,213,255,1)";
container.style.borderRadius = "10px";

const text = document.querySelector(".title");
text.style.fontSize = "1.75rem";
text.style.marginBottom = "2rem";

const convert = document.querySelector(".converter");
convert.style.width = "80%";
convert.style.marginBottom = "1rem";
convert.style.display = "grid";
convert.style.grid-template-columns == "2,1fr";



const lab = document.querySelector("label");
lab.style.display = "block";
lab.style.marginBottom = "0.5rem";


const select = document.querySelector("select");
select.style.fontSize = "1rem";
select.style.padding = "0.5rem";
select.style.border = "none";
select.style.borderRadius = "4px";  

const label = document.querySelector("label");
label.style.display = "block";
label.style.marginBottom = "0.5rem";


const result = document.querySelector(".result");
result.style.fontSize = "1.2rem";

convertBtn.style.fontSize = "1rem";
convertBtn.style.cursor = "pointer";
convertBtn.style.borderRadius = "4px";
convertBtn.style.border = "none";
convertBtn.style.color = "#fff";
convertBtn.style.backgroundColor = "#fd1afd";
convertBtn.style.padding = "05rem 1rem";

convertBtn.addEventListener("click", ()=>{
  convertBtn.style.backgroundColor = "#d319d3";
})


const input = document.querySelector("input");
input.style.fontSize = "1rem";
input.style.padding = "0.5rem";
input.style.border = "none";
input.style.borderRadius = "4px";

