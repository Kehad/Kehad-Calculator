// -----------------------------------------------//
///  ------------ FUNCTIONALITY   ------------//////
// -----------------------------------------------//

// SELECTION
const solution = document.querySelector('.container__box---minibox1--solution-number');
const history = document.querySelector('.container__box---minibox1--solution-history');
const light = document.querySelector('.container__box---minibox1--change-light');
const dark = document.querySelector('.container__box---minibox1--change-dark');
const time = document.querySelector('.container__box---minibox1--info-time');
const date = document.querySelector('.container__box---minibox1--info-date');

const buttons = document.querySelectorAll('.container__box---minibox2--button');

// darkmode






// EVENT
window.addEventListener('load', function() {
    console.log(time, date);

    const newDate = new Date();
    // console.log(newDate.getFullYear());
    // const year = newDate.getFullYear();
    // const day = newDate.getDate();
    // const month = newDate.getMonth() + 1;
    // console.log(`${day}/${month}/${year}`);
    const fulldate = newDate.toLocaleDateString();
    const fulltime = newDate.toLocaleTimeString();
    time.textContent = fulltime;
    date.textContent = fulldate;
});

// FUNCTION
let sumNum2 = [];
const getButton = function() {
    buttons.forEach(function(button) {
        // console.log(button);
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const buttonValue = event.target.textContent;
            // console.log(+event.target.textContent);
            if (+buttonValue) {
                const number = +buttonValue;
                let sumNum = [];
                sumNum2.push(number);
                console.log(sumNum2);
                let join = sumNum2.join('');
                console.log(+join);
                console.log(+join/2);

            } else {
                console.log(buttonValue)
            }
        })
    })
}
getButton();

// CHANGE FROM LIGHT MODE TO DARK MODE
const toDarkMode = function () {
   
}
const containerBox = document.querySelector('.container__box');
const containerBoxMinibox1 = document.querySelector('.container__box---minibox1');
const containerBoxMinibox1Change = document.querySelector('.container__box---minibox1--change');

const containerBoxMinibox2 = document.querySelector('.container__box---minibox2');
const containerBoxMinibox1ChangeLight = document.querySelector('.container__box---minibox1--change-light-img');
const containerBoxMinibox1ChangeDark = document.querySelector('.container__box---minibox1--change-dark-img');


dark.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Dark mode");
    containerBox.classList.add("darkmode-container-bkg");
    containerBoxMinibox1.classList.add("darkmode-bkg-color1");
    containerBoxMinibox1Change.classList.add("darkmode-change");
    containerBoxMinibox2.classList.add("darkmode-bkg-color2");
    buttons.forEach(function(button) {
        // console.log(button);
       console.log(button);
       if (button.textContent === "AC") {
            console.log("ac button");
            button.classList.add("ac-red");
            button.classList.remove("ac-green")
       } else if (!isNaN(button.textContent)) {
        console.log('Number')
        button.classList.add("backmode-button");
       } else if (isNaN(button.textContent)) {
        console.log('Operation')
        button.classList.add("yellow");
       }
    })
});

// for light mode
light.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("light mode");
    containerBox.classList.remove("darkmode-container-bkg");
    containerBoxMinibox1.classList.remove("darkmode-bkg-color1");
    containerBoxMinibox1Change.classList.remove("darkmode-change");
    containerBoxMinibox2.classList.remove("darkmode-bkg-color2");
    containerBoxMinibox1ChangeLight.setAttribute("src", "./img/icons8-light-mode-78.png")
    buttons.forEach(function(button) {
        // console.log(button);
       console.log(button);
       if (button.textContent === "AC") {
            console.log("ac button");
            button.classList.remove("ac-red");
            button.classList.remove("ac-green")
       } else if (!isNaN(button.textContent)) {
        console.log('Number')
        button.classList.remove("backmode-button");
       } else if (isNaN(button.textContent)) {
        console.log('Operation')
        button.classList.remove("yellow");
       }
    })
});

// Array.join
// JavaScript Array reduce()
//