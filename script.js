// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  console.log(hasLower, hasUpper, hasNumber, hasSymbol);
});

// generate password functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random * 10) + 48);
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*()_+{}[]=<>/?,./';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



  // //add password to previously generated passwords section
  // document.getElementById("lastNums").innerHTML += password + "<br />";
