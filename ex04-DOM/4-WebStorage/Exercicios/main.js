// BOTÕES
const bgColor = document.querySelectorAll('.bgColor');          //NodeList -> Tags HTML
const fontColor = document.querySelectorAll('.fontColor');      //NodeList -> Tags HTML
const fontSize = document.querySelectorAll('.fontSize');        //NodeList -> Tags HTML
const text = document.querySelectorAll('.description h3');      //NodeList -> Tags HTML
const lineSpacing = document.querySelectorAll('.lineSpacing');  //NodeList -> Tags HTML
const fontFamily = document.querySelectorAll('.fontFamily');    //NodeList -> Tags HTML
const main = document.querySelector('main');

const changeFontFamily = (event) => {
    const font = event.target.innerText;
    for (let i = 0; i < text.length; i++) {
        text[i].style.fontFamily = font;
    }
    localStorage.setItem('fontFamily', font);
}

const changeLineSpacing = (event) => {
    const line = event.target.innerText;
    for (let i = 0; i < lineSpacing.length; i++) {
        text[i].style.lineHeight = line;
    }
    localStorage.setItem('lineSpacing', line);
}

const changeFontSize = (event) => {
    const size = event.target.innerText;
    for (let i = 0; i < text.length; i++) {
        text[i].style.fontSize = size;
    }
    localStorage.setItem('fontSize', size);
}

const changeBackgroundColor = (event) => {
    const color = event.target.innerText;
    const principal = document.querySelector('main');
    principal.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}

const changeFontColor = (event) => {
    const color = event.target.innerText;
    const principal = document.querySelector('main');
    principal.style.color = color;
    localStorage.setItem('color', color);
}

// Add Event Listeners - Background Color
for (let i = 0; i < bgColor.length; i++) {
    bgColor[i].addEventListener('click', changeBackgroundColor)
}

// Add Event Listeners - Font Color
for (let i = 0; i < fontColor.length; i++) {
    fontColor[i].addEventListener('click', changeFontColor)
}

// Add Event Listeners - Font Size
for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', changeFontSize)
}

// Add Event Listeners - Line Spacing
for (let i = 0; i < lineSpacing.length; i++) {
    lineSpacing[i].addEventListener('click', changeLineSpacing);
}

// Add Event Listeners - Font Family
for (let i = 0; i < fontFamily.length; i++) {
    fontFamily[i].addEventListener('click', changeFontFamily);
}

//Após carregar a página, setar as configurações que estavam no localStorage
window.onload = () => {

    const setFontFamily = () => {
        const fontFamily = localStorage.getItem('fontFamily');
        for (let i = 0; i < text.length; i++) {
            text[i].style.fontFamily = fontFamily;
        }
    }

    const setlineSpacing = () => {
        const lineSpacing = localStorage.getItem('lineSpacing');
        for (let i = 0; i < text.length; i++) {
            text[i].style.lineHeight = lineSpacing;
        }
    }

    const setFontSize = () => {
        const fontSize = localStorage.getItem('fontSize');
        for (let i = 0; i < text.length; i++) {
            text[i].style.fontSize = fontSize;
        }
    }

    const setBackgroundColor = () => {
        const color = localStorage.getItem('backgroundColor');
        main.style.backgroundColor = color;
    }

    const setFontColor = () => {
        const color = localStorage.getItem('color');
        main.style.color = color;
    }

    setBackgroundColor();
    setFontColor();
    setFontSize();
    setlineSpacing();
    setFontFamily();
}


