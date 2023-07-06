/*
    Васи положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
    Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const months = 24;
const deposit = 12000;
const rate = 7;
const needsMoney = 13500;

const resultSumm = deposit * (1 + rate / 100 / 12) ** months;

let text = '';

if (resultSumm > needsMoney) {
    text = `Денег на покупку дома хватит. Остаток составляет ${resultSumm - needsMoney}`;
} else {
    text = `Денег не хватит на покупку дома. Не хватает ${needsMoney - resultSumm}`;
}

console.log(text);