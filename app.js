/*
    Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
    К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
    Выведете в консоль:
    Boolean переменную успеете ли вы взяться за работу
    Сколько вы за неё попросите?
*/

const payRateUsd = 80;
const hoursPerDay = 5;
const daysInWeek = 5;
const daysToHolidays = 11;


function getJob (hoursForProject) {
    let needDays = Math.ceil(hoursForProject/hoursPerDay);
    const payment = hoursForProject*payRateUsd;
    const needWeeks = Math.floor(needDays/5);
    needDays += needWeeks * 2;
    const success = needDays <= daysToHolidays;
    return {
        needDays,
        payment,
        success
    }
}

let result = getJob(40);

console.log(result.needDays);
console.log(result.payment);
console.log(result.success);