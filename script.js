let heading = document.getElementById("heading");
let keyCode = document.getElementById("keyCode");
let keyValue = document.getElementById("keyValue");
let charCode= document.getElementById("charCode");

document.addEventListener('keypress', (event) => {
    heading.textContent = event.keyCode;
    heading.style.fontSize = "45px";
    keyValue.textContent = event.key;
    keyCode.textContent = event.code;
    charCode.textContent = event.charCode;
});