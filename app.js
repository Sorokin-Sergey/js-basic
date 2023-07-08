/*
Найти среднее значение последоватедьности
чисел с помощью reduce
*/

const arr = [2, 4, 4, 10];

const avg = arr.reduce((acc, val, i) => {
    if (i < arr.length -1) {
        return acc + val
    } else {
        return (acc + val) / arr.length;
    }
}, 0);

console.log(avg);