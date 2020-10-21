const buttonOne = document.getElementById("buttonOne")
const body = document.querySelector('body');
buttonOne.addEventListener('click', responseToClick)

const buttonTwo = document.getElementById("buttonTwo")
buttonTwo.addEventListener('click', responseToClickTwo)

const buttonThree = document.getElementById("buttonThree")
buttonThree.addEventListener('click', responseToClickThree)

function responseToClick() {
    const hTag = document.createElement('h3');
    hTag.textContent = "Foo";
    body.appendChild(hTag);
}

function responseToClickTwo() {
    const hTagTwo = document.createElement('h3');
    hTagTwo.textContent = "Bar";
    body.appendChild(hTagTwo);
}

function responseToClickThree() {
    const hTagThree = document.createElement('h2');
    hTagThree.textContent = "FooBar";
    body.appendChild(hTagThree);
}