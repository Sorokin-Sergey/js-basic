/*
    Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!", а если он введёт "Я не робот", то тоже "Успех".
*/

const result = prompt("Сколько будет 7 + или - 15?");
let isRobot;

switch(true) {
    case result === "Я не робот":
    case Number(result) === 22:
    case Number(result) === -8:
        isRobot = false;
        break;
    default:
        isRobot = true;
}

console.log(isRobot ? 'Вы робот!' : 'Успех!');