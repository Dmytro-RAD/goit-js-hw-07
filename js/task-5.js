// Завдання 5

// Напиши скрипт, який 
// - змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і 
// - задає це значення кольору текстовим вмістом для span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor().

// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час, як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.

//===========================================================================//

const colorBtnElem = document.querySelector('.change-color');
const bodyElem = document.querySelector('.js-body');
const spanElem = document.querySelector('.color');

colorBtnElem.addEventListener('click', () => {
    const bodyColor = getRandomHexColor();
    bodyElem.style.background = bodyColor;
    spanElem.textContent = bodyColor;
});

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }