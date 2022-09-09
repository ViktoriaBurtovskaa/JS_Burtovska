// Создайте input type text и три кнопки
// кнопки должны иметь следующий функционал (должны запускать соотвествующие фунции)
// 1. Кнопка "Очистить input" (удалять содержимое value тега input)
// 2. Кнопка заблокировать инпут (disabled setAttribute)
// 3. Кнопка разблокировать инпут (disabled removeAttribute)
// или input.disabled = true/false;

let clearButton = document.querySelector(".clear-button")
let blockButton = document.querySelector(".block-button")
let unblockButton = document.querySelector(".unblock-button")
let input = document.querySelector(".input")

clearButton.addEventListener("click", clearInput)
blockButton.addEventListener("click", blockInput)
unblockButton.addEventListener("click", unblockInput)

function clearInput() {
    input.value = "";
    console.log("clearInput");
}

function blockInput() {
  input.setAttribute("disabled",true);
  console.log("blockInput");
//  input.disabled = true;
}
function unblockInput() {
 input.removeAttribute("disabled");
 console.log("unblockInput");
//  input.disabled = false;

}


// Second level:         Создайте в HTML два текстовых инпута и кнопку
// Напишите функцию, которая будет по нажатию на кнопку
// менять содержимое инпутов (value) местами

let firstInput = document.querySelector(".first-input");
let secondInput = document.querySelector(".second-input");
let swapButton = document.querySelector(".swap-button");

swapButton.addEventListener("click",swapTwoInputs)

function swapTwoInputs() {
    let firstInputValue = firstInput.value;
    let secondInputValue = secondInput.value;
    firstInput.value = secondInputValue;
    secondInput.value = firstInputValue;
}
