/*
    Есть выгрузка операций пользователя
    const operations = [1000, -700, 300, -500, 10000];
    а так же начальный баланс в 100$
    Необходимо сделать функции расчета:
    - Итогового баланса
    - Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
    - Расчета среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;

function avg (operations) {
    let positiveAvg = 0;
    let cntPositive = 0;
    let negativeAvg = 0;
    let cntNegative = 0;
    for (const operation of operations) {
        if (operation > 0) {
            positiveAvg += operation;
            cntPositive++;
        } else if (operation < 0) {
            negativeAvg += operation;
            cntNegative++;
        }
    }
    console.log(`Средний доход ${positiveAvg / cntPositive}`);
    console.log(`Средний расход ${negativeAvg / cntNegative}`);
}

function resultBalance (operations, startBalance) {
    let balance = startBalance;
    for (const operation of operations) {
        balance += operation;
        if (balance < 0) {
            return false;
        }
    }
    return balance;
}

console.log(resultBalance(operations, startBalance));

avg(operations);