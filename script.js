'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
alert('Угадай число от 1 до 100');


function gameFunc() {
  let answer = parseInt(Math.random() * 100);
  let counter = 9;
  console.log(answer);
  return function checkQuestion() {
    if (counter > 0) {
      let question = prompt('Введи число!');
      if (question === null) {
        alert('Игра закончена');
      } else if (!isNumber(question)) {
        checkQuestion();
      } else if (+question > answer) {
        alert('Загаданное число меньше, осталось попыток ' + counter);
        counter--;
        console.log(counter);
        checkQuestion();
      } else if (+question < answer) {
        alert('Загаданное число больше, осталось попыток ' + counter);
        counter--;
        console.log(counter);
        checkQuestion();
      } else {
        alert('Поздравляю, Вы угадали!!!');
        let gameAgain = confirm('Попытки закончились, хотите сыграть еще?');
          if (gameAgain === true) {
            answer = parseInt(Math.random() * 100);
            console.log(answer);
            counter = 9;
            checkQuestion();
          } else {
            return;
        }
      }
    } else {
      let lowCounter = confirm('Попытки закончились, хотите сыграть еще?');
      if (lowCounter === true) {
        answer = parseInt(Math.random() * 100);
        console.log(answer);
        counter = 9;
        checkQuestion();
      } else {
        return;
      }
    }   
  };
};
const game = gameFunc();
game();