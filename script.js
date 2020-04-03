'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
alert('Угадай число от 1 до 100');


function gameFunc() {
  const answer = parseInt(Math.random() * 100);
  console.log(answer);
  return function checkQuestion() {
    console.log(answer);
    let question = prompt('Введи число!');
    console.log(isNumber(question));
    if (question === null) {
      alert('Игра закончена');
    } else if (!isNumber(question)) {
      checkQuestion();
    } else if (+question > answer) {
      alert('Загаданное число меньше');
      checkQuestion();
    } else if (+question < answer) {
      alert('Загаданное число больше');
      checkQuestion();
    } else {
      alert('Поздравляю, Вы угадали!!!');
    }
  };
};
const game = gameFunc();
game();