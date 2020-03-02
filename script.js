const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
//generate event listen
generate.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

//generate password
function generatePassword(lower, upper, number, symbol, length) {
// 1. init pw var
//2. Filter out unchecked types
// 3. Loop over length call generator function for each type
//  4. add final password to the pw var & return
let generatedPassword = '';

const typesCount = lower + upper + number + symbol;

console.log('typesCount: ', typesCount);

const typesArr = [{lower}, {upper}, {number}, {symbol}].filter 
(
  item => Object.values(item)[0]
);

console.log('typesArr: ', typesArr);
if(typesCount === 0) {
  return '';
}
for (let i=0; i<length; i+=typesCount) {
  typesArr.forEach(type => {
    const funcName = Object.keys(type)[0];
    generatedPassword += randomFunc[funcName]();
  });
}
const finalPassword = (generatedPassword.slice(0, length));

return finalPassword;
}
// generate password functions
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// //add password to previously generated passwords section
// document.getElementById("lastNums").innerHTML += password + "<br />";
